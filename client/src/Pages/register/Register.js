import React from 'react';
import './register.scss';
import NavBar from '../Common/NavBar';
import Axios from 'axios';
import { userActions } from '../../_actions';
import { connect } from 'react-redux';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
console.log('user Actionas =>', userActions)
class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      email: '',
      password: '',
      registerSuccess: '',
      radio1: false,
      role: '',
      resume: ''
    };
    this.signUp = this.signUp.bind(this);
  }

  // componentWillReceiveProps(nextProps) {
  //   if(nextProps.loggedIn !== this.props.loggedIn) {
  //     nextProps.loggedIn === true ? window.location.href = "/login" : '';
  //   }
  // }

  validate = () => {
    if (!this.state.email) {
      return false;
    } else if (!this.state.password) {
      return false;
    } else if (!this.state.firstName) {
      return false;
    } else if (!this.state.radio1) {
      return false
    } else if(!this.state.role) {
      return false;
    }
    return true;
  }

  signUp = async (e) => {
    if (!this.validate()) {
      alert('Please fill mandatory fields');
    } else {
      e.preventDefault();
      const formData = {
        name: this.state.firstName,
        email: this.state.email,
        password: this.state.password,
        role: [this.state.role],
        // resume: this.state.resume
      }
      await this.props.signUp(formData);
      if (!this.props.errorMessage) {
        this.props.history.push('/dashboard');
      }
    }
  }
  
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  setRadioState = (e) => {
    this.setState({ radio1: !this.state.radio1 })
  }

  onSubmit = async (formData) => {
    await this.props.signUp(formData);
    if (!this.props.errorMessage) {
      this.props.history.push('/dashboard');
    }
  }

  responseGoogle = async (res) => {
     if(!this.state.role){
      alert('Pleease choose a Role');
      return;
    }
    await this.props.oauthGoogle(res.accessToken);
    if (!this.props.errorMessage) {
      const route = this.props.profile.role.includes("mentor") ? '/MentorProfile' : '/studentdashboard';
      this.props.history.push(route);
    }
  }

  responseFacebook = async (res) => {
    if(!this.state.role){
      alert('Pleease choose a Role');
      return;
    }
    await this.props.oauthFacebook(res.accessToken);
    if (!this.props.errorMessage) {
      const route = this.props.profile.role.includes("mentor") ? '/MentorProfile' : '/studentdashboard';
      this.props.history.push(route);
    }
  }

  handleChangeResume = e => {
    const [file] = e.target.files;
    var formData = new FormData();
    formData.append("resume", file);
    Axios.post('/users/resume/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }).then(res => {
      debugger
    }).catch(err => {
      debugger
    })
  }

  render() {
    return (
      <div ng-controller="Register">
        <NavBar />
        <div className="row register-wrapper">
          <div className="col-sm-2" />
          <div className="col-sm-8">
            <div className="card" style={{ backgroundColor: '#ECF0F1', marginTop: '1%' }}>
              <div className="row">
                <div className="col-sm-6">
                  <img src={require("../../assets/images/register.png")} alt="" style={{ float: 'right', width: '100%', height: '100%' }} />
                </div>
                <div className="col-sm-6 ">
                  <div className="col-sm-10">
                    <div className="row" style={{ paddingTop: '4%' }}>
                      <div className="col-sm-12">
                        <div className="row">
                          <p style={{ "color": "red" }}>{this.state.registerSuccess}</p>
                        </div>
                        <div className="row text-center">
                          <br />

                          <p style={{ fontSize: '18px' }}>
                            <strong>Register</strong>
                          </p>

                        </div>
                        <form>
                          {/* <div className>
                          <label for="role" >Role:</label>
                          <select  className name="role" id="role" onChange={this.handleChange} required value={this.state.role}>
                          <option value="">
                              Please Choose a Role
                            </option>
                            <option value="mentor">
                              Become a Mentor
                            </option>
                            <option value="student">
                              Become a Student
                           </option>

                          </select>

                        </div> */}

                          <div className="input-group mb-3 ">
                            <div className="input-group-prepend">
                              <button className="btn btn-outline-secondary" type="button">Role</button>
                            </div>
                            <select className="custom-select form-control" id="inputGroupSelect03" name="role" onChange={this.handleChange} required value={this.state.role}>
                              <option selected>Choose a role...</option>
                              <option value="mentor">Become a mentor</option>
                              <option value="student">Become a student</option>
                            </select>
                          </div>
                          <div className="row" style={{ paddingTop: '4%' }}>
                            <input type="text" className name="firstName" placeholder="Name" required value={this.state.firstName} onChange={(e) => this.handleChange(e)} />
                          </div>
                          <div className="row" style={{ paddingTop: '5%' }}>
                            <input type="text" className placeholder="E-mail" name="email" required pattern="^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$" title="Enter a Valid Email Address" value={this.state.email} onChange={(e) => this.handleChange(e)} />
                          </div>
                          <div className="row" style={{ paddingTop: '5%' }}>
                            <input type="password" className placeholder="Password" name="password" required value={this.state.password} onChange={(e) => this.handleChange(e)} />
                          </div>
                          <div class="input-group mb-3" style={{ paddingTop: '5%' }}>
                            <div className="input-group-prepend" >
                              <span className="input-group-text btn btn-outline-secondary" >Resume</span>
                            </div>
                            <div className="custom-file">
                              <input
                                type="file"
                                className="custom-file-input"
                                name="resume" id="inputGroupFile01"
                                required value={this.state.resume}
                                onChange={(e) => this.handleChangeResume(e)} />
                              <label className="custom-file-label" for="inputGroupFile01">Choose file</label>
                            </div>
                          </div>
                          {/* Backend needs to incorporate */}
                          {/* <div className="row" style={{paddingTop: '5%'}}>
                        <input type="text" className placeholder="Phone no" required />
                      </div> */}
                          <div className="row" style={{ paddingTop: '2%' }}>
                            <div className="form-check">
                              <label className="form-check-label" htmlFor="radio1">
                                 <input type="radio" className="form-check-input" name="radio1" required onClick={e => this.setRadioState(e)} />
                                <p style={{ color: 'gray', fontSize: '12px' }}>I accept terms &amp;
                              conditions &amp; privacy policy</p>
                              </label>
                            </div>
                          </div>
                          <div className="" style={{ paddingTop: '2%' }}>
                            <div className="col-sm-7" />
                            <div className="text-center">
                              <button type="submit" className="btn btn-lg btn-default p-3" name="AGREE & JOIN" color="blue" onClick={(e) => this.signUp(e)}>
                                <strong>AGREE &amp; JOIN</strong>
                              </button>
                            </div>
                          </div>
                        </form>
                        {/* <div className="row">
                        <p style={{ paddingTop: '5%', color: 'gray' }}>Log in with Social
                        Media</p>
                      </div> */}
                        <div className="fbgoogle">

                          <div className=" mb-2 mt-2">
                            <FacebookLogin
                              appId="2273900542721665"
                              render={renderProps => (
                                <button onClick={renderProps.onClick} className="fa fa-facebook"> Register with Facebook </button>
                              )}
                              fields="name,email,picture"
                              callback={this.responseFacebook}
                              cssClass="btn btn-outline-primary"
                            />
                            {/* <a href="https://en-gb.facebook.com/login/" className="fa fa-facebook"> Facebook </a> */}
                          </div>
                          <div className=" mb-2 mt-2">
                            <GoogleLogin
                              clientId="338601550454-1u2bn4i06l30sn0brqgshlqu3jnn7f2h.apps.googleusercontent.com"
                              render={renderProps => (
                                <button onClick={renderProps.onClick} disabled={renderProps.disabled} className="fa fa-google "> Register wtih Google</button>
                              )}
                              onSuccess={this.responseGoogle}
                              onFailure={this.responseGoogle}
                              className="btn btn-outline-danger"
                            />
                            {/* <a href="https://accounts.google.com/ServiceLogin/identifier?elo=1&flowName=GlifWebSignIn&flowEntry=ServiceLogin" className="fa fa-google"> Google</a> */}
                          </div>
                          {/* <div className="col-sm-4">
                          <a href="#" className="fa fa-twitter"> Twitter</a>
                        </div> */}

                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-2" />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    errorMessage: state.users.errorMessage,
    profile: state.users.profile
  }
}

const mapDispatchToProps = {
  ...userActions
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);
