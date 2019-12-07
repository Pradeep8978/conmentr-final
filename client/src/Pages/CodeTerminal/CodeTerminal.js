import React from 'react';
import AceEditor from 'react-ace';
// import 'brace/mode/javascript';
// import 'brace/mode/css';
// import 'brace/mode/scss';
// import 'brace/mode/json';
// import 'brace/mode/html';
// import 'brace/theme/monokai';
// import 'brace/ext/language_tools';
// import "ace-builds/src-noconflict/mode-java";
// import "ace-builds/src-noconflict/theme-github";
import { Button } from 'react-bootstrap';
// import './learn.scss';
import $ from 'jquery';
import { userActions } from '../../_actions';
import Pusher from "pusher-js";
import pushid from "pushid";
import axios from "axios";
import VideoPlayer from './../../Components/VideoPlayer/VideoPlayer';
import './CodeTerminal.scss';
import io from 'socket.io-client';
import {connect} from 'react-redux';
// var io = socket.io

            /** CONFIG **/
            var SIGNALING_SERVER = "http://localhost:3000";
            var USE_AUDIO = true;
            var USE_VIDEO = true;
            var DEFAULT_CHANNEL = 'some-global-channel-name';
            var MUTE_AUDIO_BY_DEFAULT = false;

            /** You should probably use a different stun server doing commercial stuff **/
            /** Also see: https://gist.github.com/zziuni/3741933 **/
            var ICE_SERVERS = [
                {url:"stun:stun.l.google.com:19302"}
            ];

            var signaling_socket = null;   /* our socket.io connection to our webserver */
            var local_media_stream = null; /* our own microphone / webcam */
            var peers = {};                /* keep track of our peer connections, indexed by peer_id (aka socket.io id) */
            var peer_media_elements = {};  /* keep track of our <video>/<audio> tags, indexed by peer_id */

            function setup_local_media(callback, errorback) {
              if (local_media_stream != null) {  /* ie, if we've already been initialized */
                  if (callback) callback();
                  return; 
              }
              /* Ask user for permission to use the computers microphone and/or camera, 
               * attach it to an <audio> or <video> tag if they give us access. */
              console.log("Requesting access to local audio / video inputs");
            
            
              navigator.getUserMedia = ( navigator.getUserMedia ||
                     navigator.webkitGetUserMedia ||
                     navigator.mozGetUserMedia ||
                     navigator.msGetUserMedia);
            
              navigator.getUserMedia({"audio":USE_AUDIO, "video":USE_VIDEO},
                  function(stream) { /* user accepted access to a/v */
                      console.log("Access granted to audio/video");
                      local_media_stream = stream;
                      var local_media = USE_VIDEO ? $("<video>") : $("<audio>");
                      local_media.attr("autoplay", "autoplay");
                      local_media.attr("muted", "true"); /* always mute ourselves by default */
                      local_media.attr("controls", "");
                      $('#video-container').append(local_media);
                      attachMediaStream(local_media[0], stream);
            
                      if (callback) callback();
                  },
                  function() { /* user denied access to a/v */
                      console.log("Access denied for audio/video");
                      alert("You chose not to provide access to the camera/microphone, demo will not work.");
                      if (errorback) errorback();
                  });
            }


            
function attachMediaStream(element, stream) {
  console.log('DEPRECATED, attachMediaStream will soon be removed.');
  element.srcObject = stream;
};

class CodeTerminal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      mode: 'html',
      outputObj: { body: {} },
      stdIn: '',
      html: '',
      modalOpen: false,
      editorId: 'editor',
      DEFAULT_CHANNEL: ''
    };
    this.update = this.update.bind(this);
    this.onChangeMode = this.onChangeMode.bind(this);
    this.onLoad = this.onLoad.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onOpen = this.onOpen.bind(this);
    this.onClose = this.onClose.bind(this);
    this.runCode = this.runCode.bind(this);
    this.getStdIn = this.getStdIn.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.joinCall = this.joinCall.bind(this);
    this.pusher = new Pusher("1ada3023548608d7ae06", {
      cluster: "mt1",
      forceTLS: true
    });
    const getUserToken = JSON.parse(localStorage.getItem('userAuth'));
    this.editorId = getUserToken ? `editor${getUserToken.userId}` : 'editor';
    this.channel = this.pusher.subscribe(this.editorId);
  }
  componentDidMount() {
    window.editor = window.ace.edit(this.editorId);
    this.setState({
      id: pushid(),
      editorId: this.editorId,
      DEFAULT_CHANNEL: this.props.profile.id
    });
    this.channel.bind("text-update", data => {
      const { id } = this.state;
      if (data.id === id) return;

      this.setState({
        html: data.html
      })
    })
    if(this.props.profile.role.includes('mentor')){
      $('#video-container div').hide();
    }
  }

  componentWillReceiveProps(nextProps, props) {
    if (nextProps !== props) {
      this.joinCall();
    }
  }

  shouldComponentUpdate(nextState, nextProps) {
    return this.state.stdIn !== nextState.stdIn;
  }

  onToggleSession = () => {
    const {session} = this.state;
    if(session){
      this.stopSession()
    }else this.init()
    this.setState({session: !session});
  }

  logOut() {
    this.props.dispatch(userActions.logout());
  }

  onChangeMode(e) {
    this.setState({ mode: e.target.value });
  }

  onChange() {
    this.setState({ html: window.editor.getValue() }, () => this.syncUpdates());
    this.state.mode === "html" && this.update();
  }

  onLoad() {
    console.log('onLoad');
  }

  onOpen() {
    console.log('on Open');
  }

  joinCall() {
    window.onGruveoEmbedAPIReady();
  }

  onClose() {
    console.log('on Close');
  }

  update() {
    let compilerId = document.getElementById('compiler').contentWindow.document;
    compilerId.open();
    compilerId.write(window.editor.getValue());
    compilerId.close();
  }

  getStdIn(e) {
    this.setState({ stdIn: e.target.value, html: window.editor.getValue() });
  }

  runCode() {
    const requestData = {
      "sourceCode": window.editor.getValue()
    }
    fetch(`/collaboration/compile/${this.state.mode.toLowerCase()}`, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, cors, *same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, same-origin, *omit
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        // "Content-Type": "application/x-www-form-urlencoded",
      },
      redirect: "follow", // manual, *follow, error
      referrer: "no-referrer", // no-referrer, *client
      body: JSON.stringify(requestData), // body data type must match "Content-Type" header
    }).then(response => response.json()).then((outputObj) => {
      this.setState({
        outputObj
      });
    });
  }

  openModal() {
    this.setState({ modalOpen: true });
  }

  closeModal() {
    this.setState({ modalOpen: false });
  }

  syncUpdates = () => {
    const data = { ...this.state };
    axios.post("/collaboration/update-editor", data)
    .then(res => {
      debugger
    }).catch((err) =>{
      debugger
      console.error(err)
    });
    // http://conmentr-node.us-west-2.elasticbeanstalk.com
  }

  stopSession = () => {
    // signaling_socket
  }

  init(DEFAULT_CHANNEL) {
    //var _this = this;
    const CHANNEL = DEFAULT_CHANNEL || this.state.DEFAULT_CHANNEL;
    console.log("Connecting to signaling server");
    signaling_socket = io(SIGNALING_SERVER);
    signaling_socket = io();
    signaling_socket.on('connect', function() {
        console.log("Connected to signaling server");
        setup_local_media(() => {
            /* once the user has given us access to their
             * microphone/camcorder, join the channel and start peering up */
            join_chat_channel(DEFAULT_CHANNEL, {'whatever-you-want-here': 'stuff'});
        });
    });
    signaling_socket.on('disconnect', function() {
        console.log("Disconnected from signaling server");
        /* Tear down all of our peer connections and remove all the
         * media divs when we disconnect */
        var peer_id;
        for (peer_id in peer_media_elements) {
            peer_media_elements[peer_id].remove();
        }
        for (peer_id in peers) {
            peers[peer_id].close();
        }

        peers = {};
        peer_media_elements = {};
    });
    function join_chat_channel(channel, userdata) {
        signaling_socket.emit('join', {"channel": channel, "userdata": userdata});
    }
    // function part_chat_channel(channel) {
    //     signaling_socket.emit('part', channel);
    // }


    /** 
    * When we join a group, our signaling server will send out 'addPeer' events to each pair
    * of users in the group (creating a fully-connected graph of users, ie if there are 6 people
    * in the channel you will connect directly to the other 5, so there will be a total of 15 
    * connections in the network). 
    */
    signaling_socket.on('addPeer', function(config) {
        console.log('Signaling server said to add peer:', config);
        var peer_id = config.peer_id;
        if (peer_id in peers) {
            /* This could happen if the user joins multiple channels where the other peer is also in. */
            console.log("Already connected to peer ", peer_id);
            return;
        }
        var peer_connection = new RTCPeerConnection(
            {"iceServers": ICE_SERVERS},
            {"optional": [{"DtlsSrtpKeyAgreement": true}]} /* this will no longer be needed by chrome
                                                            * eventually (supposedly), but is necessary 
                                                            * for now to get firefox to talk to chrome */
        );
        peers[peer_id] = peer_connection;

        peer_connection.onicecandidate = function(event) {
            if (event.candidate) {
                signaling_socket.emit('relayICECandidate', {
                    'peer_id': peer_id, 
                    'ice_candidate': {
                        'sdpMLineIndex': event.candidate.sdpMLineIndex,
                        'candidate': event.candidate.candidate
                    }
                });
            }
        }
        peer_connection.onaddstream = function(event) {
            console.log("onAddStream", event);
            var remote_media = USE_VIDEO ? $("<video>") : $("<audio>");
            remote_media.attr("autoplay", "autoplay");
            if (MUTE_AUDIO_BY_DEFAULT) {
                remote_media.attr("muted", "true");
            }
            remote_media.attr("controls", "");
            peer_media_elements[peer_id] = remote_media;
            $('#videoContainer').append(remote_media);
            attachMediaStream(remote_media[0], event.stream);
        }

        /* Add our local stream */
        peer_connection.addStream(local_media_stream);

        /* Only one side of the peer connection should create the
         * offer, the signaling server picks one to be the offerer. 
         * The other user will get a 'sessionDescription' event and will
         * create an offer, then send back an answer 'sessionDescription' to us
         */
        if (config.should_create_offer) {
            console.log("Creating RTC offer to ", peer_id);
            peer_connection.createOffer(
                function (local_description) { 
                    console.log("Local offer description is: ", local_description);
                    peer_connection.setLocalDescription(local_description,
                        function() { 
                            signaling_socket.emit('relaySessionDescription', 
                                {'peer_id': peer_id, 'session_description': local_description});
                            console.log("Offer setLocalDescription succeeded"); 
                        },
                        function() { alert("Offer setLocalDescription failed!"); }
                    );
                },
                function (error) {
                    console.log("Error sending offer: ", error);
                });
        }
    });


    /** 
     * Peers exchange session descriptions which contains information
     * about their audio / video settings and that sort of stuff. First
     * the 'offerer' sends a description to the 'answerer' (with type
     * "offer"), then the answerer sends one back (with type "answer").  
     */
    signaling_socket.on('sessionDescription', function(config) {
        console.log('Remote description received: ', config);
        var peer_id = config.peer_id;
        var peer = peers[peer_id];
        var remote_description = config.session_description;
        console.log(config.session_description);

        var desc = new RTCSessionDescription(remote_description);
        peer.setRemoteDescription(desc, 
            function() {
                console.log("setRemoteDescription succeeded");
                if (remote_description.type === "offer") {
                    console.log("Creating answer");
                    peer.createAnswer(
                        function(local_description) {
                            console.log("Answer description is: ", local_description);
                            peer.setLocalDescription(local_description,
                                function() { 
                                    signaling_socket.emit('relaySessionDescription', 
                                        {'peer_id': peer_id, 'session_description': local_description});
                                    console.log("Answer setLocalDescription succeeded");
                                },
                                function() { alert("Answer setLocalDescription failed!"); }
                            );
                        },
                        function(error) {
                            console.log("Error creating answer: ", error);
                            console.log(peer);
                        });
                }
            },
            function(error) {
                console.log("setRemoteDescription error: ", error);
            }
        );
        console.log("Description Object: ", desc);

    });

    /**
     * The offerer will send a number of ICE Candidate blobs to the answerer so they 
     * can begin trying to find the best path to one another on the net.
     */
    signaling_socket.on('iceCandidate', function(config) {
        var peer = peers[config.peer_id];
        var ice_candidate = config.ice_candidate;
        peer.addIceCandidate(new RTCIceCandidate(ice_candidate));
    });


    /**
     * When a user leaves a channel (or is disconnected from the
     * signaling server) everyone will recieve a 'removePeer' message
     * telling them to trash the media channels they have open for those
     * that peer. If it was this client that left a channel, they'll also
     * receive the removePeers. If this client was disconnected, they
     * wont receive removePeers, but rather the
     * signaling_socket.on('disconnect') code will kick in and tear down
     * all the peer sessions.
     */
    signaling_socket.on('removePeer', function(config) {
        console.log('Signaling server said to remove peer:', config);
        var peer_id = config.peer_id;
        if (peer_id in peer_media_elements) {
            peer_media_elements[peer_id].remove();
        }
        if (peer_id in peers) {
            peers[peer_id].close();
        }

        delete peers[peer_id];
        delete peer_media_elements[config.peer_id];
    });
}





  render() {
    const supportedLang = [
      {
        label: 'HTML',
        value: 'html'
      },
      {
        label: 'Python',
        value: 'python'
      },
      {
        label: 'C',
        value: 'c'
      },
      {
        label: 'C++',
        value: 'cpp'
      },
      {
        label: 'Node js',
        value: 'node'
      },
      {
        label: 'Java',
        value: 'java'
      }
    ];

    return (
      <div className="main_terminal">
        <div className="row controls_wrapper">
          <div className="col-sm-12">
            <select class="form-control" id="sel1" value={this.state.mode} onChange={this.onChangeMode}>
              {
                supportedLang.map(item => <option key={item.value} value={item.value}>{item.label}</option>)
              }
            </select>
            <button type="button" class="btn btn-success ml-2" onClick={this.onToggleSession}>Start Live Session</button>
          </div>
        </div>
        <div className="main_terminal_block">
          <div className="main_file_view_block">
            <div className="main_file_view_header">
              <div className="main_file_view_name">
                Code Playground
              </div>
            </div>
            <div contenteditable="true" className="main_file_view_body">
              <AceEditor
                mode={this.state.mode}
                theme="monokai"
                name={this.editorId}
                onLoad={this.onLoad}
                onChange={this.onChange}
                fontSize={14}
                showPrintMargin={true}
                showGutter={true}
                highlightActiveLine={true}
                value={this.state.html}
                setOptions={{
                  enableBasicAutocompletion: true,
                  enableLiveAutocompletion: true,
                  enableSnippets: false,
                  showLineNumbers: true,
                  tabSize: 2,
                }} />
            </div>
            {/* need changes for responsive UI */}
          </div>
          <div className="main_file_code_terminal">
            <div className="main_file_code_terminal_inr">
              {
                this.state.mode === "html" ? 
                <iframe id="compiler" title="compiler" frameBorder="0" className="col-md-12 bg-white"></iframe> :
                  <div className="pull-left compile-area col-md-12">
                    <Button className="bx--btn bx--btn--primary">Compile</Button>
                    <Button onClick={this.runCode} className="bx--btn bx--btn--primary">Run</Button>
                    <div className="output-area">
                      <div className="result-section">
                        <label>OUTPUT:</label>
                        <div>
                          {this.state.outputObj.stdout}
                        </div>
                      </div>
                      <div className="result-section">
                        <label>ERROR CODE:</label>
                        <div>
                          {this.state.outputObj.stderr}
                        </div>
                      </div>
                      <div className="result-section">
                        <label>MEMORY:</label>
                        <div>
                          {this.state.outputObj.memoryUsage}
                        </div>
                      </div>
                      <div className="result-section">
                        <label>CPU TIME:</label>
                        <div>
                          {this.state.outputObj.cpuUsage}
                        </div>
                      </div>
                    </div>
                  </div>
              }
            </div>
          </div>
          <div className="main_file_code_terminal p-0 video_wrapper" id="video-container">
              <VideoPlayer />
              {/* <iframe src="https://twiliopython.appspot.com/" frameborder="0" className="frame" height="100%" width="100%"></iframe> */}
            </div>
        </div>
      </div>

    );
  }
}

const mapStateToProps = state => ({
  profile: state.users.profile
})

export default connect(mapStateToProps)(CodeTerminal)