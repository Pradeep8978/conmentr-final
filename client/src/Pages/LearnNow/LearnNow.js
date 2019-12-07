import React from 'react';
import AceEditor from 'react-ace';
import 'brace/mode/javascript';
import 'brace/mode/css';
import 'brace/mode/scss';
import 'brace/mode/json';
import 'brace/mode/html';
import 'brace/theme/monokai';
import 'brace/ext/language_tools';
import { Dropdown, TextInput, Button } from 'carbon-components-react';
import './learn.scss';
import { userActions } from '../../_actions';
import Pusher from "pusher-js";
import pushid from "pushid";
import axios from "axios";

class LearnNow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "",
            mode: 'html',
            outputObj: { body: {} },
            stdIn: '',
            html: '',
            modalOpen: false
        };
        this.logOut = this.logOut.bind(this);
        this.update = this.update.bind(this);
        this.changeMode = this.changeMode.bind(this);
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
        this.channel = this.pusher.subscribe("editor");
    };

    componentDidMount() {
        window.editor = window.ace.edit('blah2');
        this.setState({
            id: pushid()
        });
        this.channel.bind("text-update", data => {
            const { id } = this.state;
            if(data.id === id) return;

            this.setState({
                html: data.html
            })
        })
    }

    componentWillReceiveProps(nextProps, props) {
        if (nextProps !== props) {
            this.joinCall();
        }
    }

    shouldComponentUpdate(nextState, nextProps) {
        return this.state.stdIn !== nextState.stdIn;
    }

    logOut() {
        this.props.dispatch(userActions.logout());
    }

    changeMode(e) {
        this.setState({ mode: e.value });
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
        fetch(`http://13.127.28.147:3000/compile-${this.state.mode.toLowerCase()}`, {
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
        axios.post("http://13.127.28.147:3000/update-editor", data).catch(console.error);
    }

    render() {
        const supportedLang = [
            'python',
            'html'
        ];
        return (
            // <div className="learn-now">
            //     <Navbar
            //         classes="navbar-abs navbar-custom pull-left feeds-nav w-100"
            //         loggedIn = "true"
            //         feeds = "true"
            //         search= "true"
            //         logOut = {this.logOut}
            //     />
            //     <div className="code-video-container">
            //         <div className="col-md-4 pull-left video-section">
            //             <div id="myembed"></div>
            //             <div className="col-md-12">                        
            //                 <div className="pull-left col-md-12 dropdown-mode-select">
            //                     <h6>Please select a coding Langauge</h6>
            //                     <Dropdown className="col-md-12"
            //                         ariaLabel="dropdown menu label"
            //                         onChange={this.changeMode}
            //                         onOpen={this.onOpen}
            //                         onClose={this.onClose}
            //                         defaultText="Select the Langauge"
            //                         value = { this.state.mode }
            //                     >
            //                         {
            //                             supportedLang.map(value => <DropdownItem itemText={value} value={value} />)
            //                         }
            //                     </Dropdown>
            //                 </div>
            //             </div>
            //         </div>
            //         <div className="col-md-4 pull-left">
            //             <AceEditor
            //                 mode={this.state.mode}
            //                 theme="monokai"
            //                 name="blah2"
            //                 onLoad={this.onLoad}
            //                 onChange={this.onChange}
            //                 fontSize={14}
            //                 showPrintMargin={true}
            //                 showGutter={true}
            //                 highlightActiveLine={true}
            //                 value={ this.state.html }
            //                 setOptions={{
            //                     enableBasicAutocompletion: true,
            //                     enableLiveAutocompletion: true,
            //                     enableSnippets: false,
            //                     showLineNumbers: true,
            //                     tabSize: 2,
            //             }} />
            //         </div>
            //         <div className="col-md-4 pull-right">
            //             {
            //                 this.state.mode === "html" ?
            //                 <iframe id="compiler" frameBorder="0" className="col-md-12">

            //                 </iframe>
            //             :
            //                 <div className="pull-left compile-area col-md-12">
            //                     <Button className="bx--btn bx--btn--primary">Compile</Button>
            //                     <Button onClick={this.runCode} className="bx--btn bx--btn--primary">Run</Button>
            //                     <div className="output-area">
            //                         <div className="result-section">
            //                             <TextInput
            //                                 className="col-md-6"
            //                                 id="stdin"
            //                                 labelText="STDIN"
            //                                 type="text"
            //                                 placeholder="Enter Input Parameters"
            //                                 hideLabel={false}
            //                                 invalidText="A valid value is required"
            //                                 onChange={this.getStdIn}
            //                                 value={this.state.stdIn}
            //                             />
            //                         </div>
            //                         <div className="result-section">
            //                             <label>OUTPUT:</label>
            //                             { this.state.outputObj.body.output }
            //                         </div>
            //                         <div className="result-section">
            //                             <label>STATUS:</label>
            //                             { this.state.outputObj.statusCode }
            //                         </div>
            //                         <div className="result-section">
            //                             <label>MEMORY:</label>
            //                             { this.state.outputObj.body.memory }
            //                         </div>
            //                         <div className="result-section">
            //                             <label>CPU TIME:</label>
            //                             { this.state.outputObj.body.cpuTime }
            //                         </div>
            //                     </div>
            //                 </div>
            //             }
            //         </div>
            //     </div>
            // </div>

            <div className="row learn-now">
                <div className="col-sm-1" style={{ backgroundColor: '#3b3c3d' }}>
                    <div className="row" style={{ color: 'white', marginTop: '5%' }}>
                        <div className="col-sm-3" style={{ marginLeft: '5%' }}>
                            <p style={{ fontSize: '.7vw' }}>Projects</p>
                        </div>
                        <div className="col-sm-5" />
                        <div className="col-sm-3">
                            <i className="fa fa-cog" aria-hidden="true" />
                        </div>
                    </div>
                    <hr style={{ opacity: '0.2' }} />
                    <div className="row" style={{ marginLeft: '5%' }}>
                        <p style={{ fontSize: '.58vw', color: 'gray' }}>FILES</p>
                    </div>
                    <div className="row" style={{ marginLeft: '2%' }}>
                        <a href="#" style={{ textDecoration: 'none' }}>
                            <span style={{ color: 'green' }}>&lt; &gt; <font color="gray">index.html</font></span></a>
                    </div>
                    <div className="row" style={{ marginLeft: '2%' }}>
                        <a href="#" style={{ textDecoration: 'none' }}>
                            <span style={{ color: 'blue' }}> JS <font color="gray">index.js</font></span></a>
                    </div>
                    <div className="row" style={{ marginTop: '20%', marginLeft: '3%', marginBottom: '590%' }}>
                        <p style={{ color: 'gray', fontSize: '0.6vw' }}>DEPENDENCIES</p>
                    </div>
                </div>
                <div className="col-sm-9" style={{ backgroundColor: '#1f1c1c' }}>
                    <div className="row" style={{ marginTop: '1%' }}>
                        <div className="col-sm-2">
                            <p style={{ color: 'white', fontSize: '0.8vw' }}>index.js</p>
                        </div>
                        <div className="col-sm-9">
                            <div className="col-md-4 video-section">
                                {/* <div id="myembed"></div> */}
                                <div className="col-md-12">
                                    <div className="col-md-12 dropdown-mode-select">
                                        <div className="label"><h6>Please select a coding Langauge</h6></div>
                                        <Dropdown className="col-md-12"
                                            ariaLabel="dropdown menu label"
                                            onChange={this.changeMode}
                                            onOpen={this.onOpen}
                                            onClose={this.onClose}
                                            defaultText="Select the Langauge"
                                            value={this.state.mode}
                                        >
                                            {
                                                supportedLang.map(value => <li itemText={value} value={value} />)
                                            }
                                        </Dropdown>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-1">
                            <i className="fa fa-chevron-right" style={{ color: 'white' }} />
                        </div>
                    </div>
                    <hr style={{ opacity: '0.2' }} />
                    <div className="row">
                        <AceEditor
                            mode={this.state.mode}
                            theme="monokai"
                            name="blah2"
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
                        {/* <textarea name="name" rows={33} cols={190} style={{border: 'none', outline: 'none'}} defaultValue={""} /> */}
                    </div>
                    <hr style={{ opacity: '0.2' }} />
                    <div className="row" style={{ marginTop: '1%', marginLeft: '1%' }}>
                        <p style={{ color: 'gray', fontSize: '0.6vw' }}>CONSOLE</p>
                        <div className="col-md-4 pull-right">
                        {
                            this.state.mode === "html" ? <iframe id="compiler" frameBorder="0" className="col-md-12 bg-white"></iframe> :
                            <div className="pull-left compile-area col-md-12">
                                <Button className="bx--btn bx--btn--primary">Compile</Button>
                                <Button onClick={this.runCode} className="bx--btn bx--btn--primary">Run</Button>
                                <div className="output-area">
                                    {/* <div className="result-section">
                                        <TextInput
                                            className="col-md-6"
                                            id="stdin"
                                            labelText="STDIN"
                                            type="text"
                                            placeholder="Enter Input Parameters"
                                            hideLabel={false}
                                            invalidText="A valid value is required"
                                            onChange={this.getStdIn}
                                            value={this.state.stdIn}
                                        />
                                    </div> */}
                                    <div className="result-section">
                                        <label>OUTPUT:</label>
                                        <div>
                                            { this.state.outputObj.stdout }
                                        </div>
                                    </div>
                                    <div className="result-section">
                                        <label>ERROR CODE:</label>
                                        <div>
                                            { this.state.outputObj.stderr }
                                        </div>
                                    </div>
                                    <div className="result-section">
                                        <label>MEMORY:</label>
                                        <div>
                                            { this.state.outputObj.memoryUsage }
                                        </div>
                                    </div>
                                    <div className="result-section">
                                        <label>CPU TIME:</label>
                                        <div>
                                            { this.state.outputObj.cpuUsage }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        }
                        </div>
                    </div>
                </div>
                <div className="col-sm-2" style={{ backgroundColor: '#3b3c3d' }}>
                    <div className="row">
                        <ul className="nav nav-tabs">
                            <li className="nav-item">
                                <a className="nav-link" data-toggle="tab" href="#ABOUT" style={{ color: 'gray', fontSize: '.6vw' }}>ABOUT</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-toggle="tab" href="#NOTES" style={{ color: 'gray', fontSize: '.6vw' }}>NOTES</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-toggle="tab" href="#QA" style={{ color: 'gray', fontSize: '.6vw' }}>QA</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-toggle="tab" href="#COLLABORATE" style={{ color: 'gray', fontSize: '.6vw' }}>COLLABORATE</a>
                            </li>
                        </ul>
                    </div>
                    <div className="row">
                        <div className="tab-content">
                            <div id="ABOUT" className="tab-pane"><br />
                                <div className="row">
                                    <div className="col-sm-4" />
                                    <div className="col-sm-4">
                                        <img src="images.png" alt="" width="120%" height="100%" style={{ borderRadius: '50%' }} />
                                    </div>
                                    <div className="col-sm-4" />
                                </div>
                                <div className="row" style={{ marginTop: '2%' }}>
                                    <div className="col-sm-3" />
                                    <div className="col-sm-7">
                                        <p style={{ color: 'white', fontSize: '0.9vw' }}>Course Introduction:
                                          Nueral Network in
                          Javascript</p>
                                    </div>
                                    <div className="col-sm-2" />
                                </div>
                                <div className="row">
                                    <div className="col-sm-4"> </div>
                                    <div className="col-sm-6"><a href="#">Robert plummer</a> </div>
                                    <div className="col-sm-2"> </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-4" />
                                    <div className="col-sm-5" style={{ color: 'gray' }}>
                                        <i className="fa fa-github"><a href="#" style={{ color: 'gray', fontSize: '0.6vw' }}>github</a></i>
                                        <i className="fa fa-twitter"><a href="#" style={{ color: 'gray', fontSize: '0.6vw' }}>twitter</a></i>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-1"> </div>
                                    <div className="col-sm-10">
                                        <p style={{ fontSize: '0.7vw', color: 'gray' }}>In this lecture, I will start by giving you an
                                          In this lecture, I will start by giving you an
                                          In this lecture, I will start by giving you an
                                          In this lecture, I will start by giving you an
                                          In this lecture, I will start by giving you an
                                          In this lecture, I will start by giving you an
                                          In this lecture, I will start by giving you an
                        </p>
                                    </div>
                                    <div className="col-sm-1"> </div>
                                </div>
                            </div>
                            <div id="NOTES" className="tab-pane"><br />
                                <div className="row" style={{ marginTop: '2%' }}>
                                    <div className="col-sm-1"> </div>
                                    <div className="col-sm-10">
                                        <p style={{ fontSize: '0.7vw', color: 'gray' }}>whenever you start playing around with the
                                          code, a node will be created. All your notes
                                          code, a node will be created. All your notes
                                          code, a node will be created. All your notes
                                          code, a node will be created. All your notes
                                          code, a node will be created. All your notes
                                          code, a node will be created. All your notes
                        </p>
                                    </div>
                                    <div className="col-sm-1"> </div>
                                </div>
                            </div>
                            <div id="QA" className="tab-pane"><br />
                                <div className="row" style={{ marginTop: '1%' }}>
                                    <div className="col-sm-1"> </div>
                                    <div className="col-sm-10"><p style={{ fontSize: '0.7vw', color: 'gray' }}>Question and answers related to this scrimba <a href="#">Ask a Question</a></p> </div>
                                    <div className="col-sm-1"> </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-1" />
                                    <div className="col-sm-2" style={{}}>
                                        <img src="images.png" alt="" style={{ width: '110%', height: '50%' }} />
                                    </div>
                                    <div className="col-sm-5" style={{}}>
                                        <div className="row">
                                            <p><a href="#" style={{ color: 'white' }}>Nicholus20</a></p>
                                        </div>
                                        <div className="row" style={{ marginTop: '1%' }}>
                                            <p style={{ color: 'gray' }}>4 months ago- <a href="#">reply</a></p>
                                        </div>
                                        <div className="row">
                                            <button type="button" name="button" style={{ backgroundColor: 'yellow', border: 'none' }}>index.js</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-1" />
                                    <div className="col-sm-10">
                                        <p style={{ color: 'gray' }}>i have been working ihhjvhv jhvgjhgjhghgyuighjhghygyghj</p>
                                    </div>
                                    <div className="col-sm-1" />
                                </div>
                                <div className="row">
                                    <div className="col-sm-1" />
                                    <div className="col-sm-10">
                                        <a href="#">https://github.com/liquidcarrot/carrot</a>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-1" />
                                    <div className="col-sm-10"><p style={{ color: 'gray', marginTop: '2%' }}>Any thoughts?</p> </div>
                                </div>
                                <hr style={{ opacity: '0.2' }} />
                                <div className="row">
                                    <div className="col-sm-1" />
                                    <div className="col-sm-2" style={{}}>
                                        <img src="images.png" alt="" style={{ width: '110%', height: '50%' }} />
                                    </div>
                                    <div className="col-sm-5" style={{}}>
                                        <div className="row">
                                            <p><a href="#" style={{ color: 'white' }}>Nicholus20</a></p>
                                        </div>
                                        <div className="row" style={{ marginTop: '1%' }}>
                                            <p style={{ color: 'gray' }}>4 months ago- <a href="#">reply</a></p>
                                        </div>
                                        <div className="row">
                                            <button type="button" name="button" style={{ backgroundColor: 'yellow', border: 'none' }}>index.js</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-1" />
                                    <div className="col-sm-10">
                                        <p style={{ color: 'gray' }}>i have been working ihhjvhv jhvgjhgjhghgyuighjhghygyghj</p>
                                    </div>
                                    <div className="col-sm-1" />
                                </div>
                                <div className="row">
                                    <div className="col-sm-1" />
                                    <div className="col-sm-10">
                                        <a href="#">https://github.com/liquidcarrot/carrot</a>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-1" />
                                    <div className="col-sm-10"><p style={{ color: 'gray', marginTop: '2%' }}>Any thoughts?</p> </div>
                                </div>
                                <hr style={{ opacity: '0.2' }} />
                                <div className="row">
                                    <div className="col-sm-1" />
                                    <div className="col-sm-2" style={{}}>
                                        <img src="images.png" alt="" style={{ width: '110%', height: '50%' }} />
                                    </div>
                                    <div className="col-sm-5" style={{}}>
                                        <div className="row">
                                            <p><a href="#" style={{ color: 'white' }}>Nicholus20</a></p>
                                        </div>
                                        <div className="row" style={{ marginTop: '1%' }}>
                                            <p style={{ color: 'gray' }}>4 months ago- <a href="#">reply</a></p>
                                        </div>
                                        <div className="row">
                                            <button type="button" name="button" style={{ backgroundColor: 'yellow', border: 'none' }}>index.js</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-1" />
                                    <div className="col-sm-10">
                                        <p style={{ color: 'gray' }}>i have been working ihhjvhv jhvgjhgjhghgyuighjhghygyghj</p>
                                    </div>
                                    <div className="col-sm-1" />
                                </div>
                                <div className="row">
                                    <div className="col-sm-1" />
                                    <div className="col-sm-10">
                                        <a href="#">https://github.com/liquidcarrot/carrot</a>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-1" />
                                    <div className="col-sm-10"><p style={{ color: 'gray', marginTop: '2%' }}>Any thoughts?</p> </div>
                                </div>
                                <hr style={{ opacity: '0.2' }} />
                                <div className="row">
                                    <div className="col-sm-1" />
                                    <div className="col-sm-2" style={{}}>
                                        <img src="images.png" alt="" style={{ width: '110%', height: '50%' }} />
                                    </div>
                                    <div className="col-sm-5" style={{}}>
                                        <div className="row">
                                            <p><a href="#" style={{ color: 'white' }}>Nicholus20</a></p>
                                        </div>
                                        <div className="row" style={{ marginTop: '1%' }}>
                                            <p style={{ color: 'gray' }}>4 months ago- <a href="#">reply</a></p>
                                        </div>
                                        <div className="row">
                                            <button type="button" name="button" style={{ backgroundColor: 'yellow', border: 'none' }}>index.js</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-1" />
                                    <div className="col-sm-10">
                                        <p style={{ color: 'gray' }}>i have been working ihhjvhv jhvgjhgjhghgyuighjhghygyghj</p>
                                    </div>
                                    <div className="col-sm-1" />
                                </div>
                                <div className="row">
                                    <div className="col-sm-1" />
                                    <div className="col-sm-10">
                                        <a href="#">https://github.com/liquidcarrot/carrot</a>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-1" />
                                    <div className="col-sm-10"><p style={{ color: 'gray', marginTop: '2%' }}>Any thoughts?</p> </div>
                                </div>
                                <hr style={{ opacity: '0.2' }} />
                            </div>
                            <div id="COLLABORATE" className="tab-pane"><br />
                                <div className="row" style={{ marginTop: '2%' }}>
                                    <div className="col-sm-6" />
                                    <div className="col-sm-2">
                                        <i className="fa fa-users" style={{ fontSize: '2vw', color: 'gray' }} />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-1">
                                    </div>
                                    <div className="col-sm-11" style={{ marginLeft: '25%' }}> <p style={{ color: 'gray' }}>Add people to collaborate </p> </div>
                                </div>
                                <div className="row" style={{ marginTop: '2%' }}>
                                    <div className="col-sm-3" />
                                    <div className="col-sm-2">
                                        <input type="text" name="invite" defaultValue />
                                    </div>
                                </div>
                                <div className="row" style={{ marginTop: '10%' }}>
                                    <div className="col-sm-6" />
                                    <div className="col-sm-3">
                                        <button type="button" name="button" style={{ border: 'none', color: 'gray', marginTop: '2%' }}>INVITE</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default LearnNow;