import React from 'react';
// import HeaderImage from '../../Components/Common/HeaderImage/HeaderImage.js';
import './login.scss';
// import WOW from "wowjs";
// import Navbar from '../../Components/Common/Navbar/Navbar.js'
// import EmailForm from '../../Components/LoginModule/EmailForm/EmailForm.js'
// import PasswordForm from '../../Components/LoginModule/PasswordForm/PasswordForm.js'
// import Footer from '../../Components/Common/Footer/Footer.js'
// import { connect } from 'react-redux';
// import { userActions } from '../../_actions';
// import TiltPhaseOne from '../../Components/Common/TiltPhaseOne/TiltPhaseOne.js';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showPassword: false,
      registerSuccess: '',
      isVerified: false
    }
  }

  componentDidMount(){
    // const wow = new WOW.WOW();
    // wow.init();
    // this.verifyCode();
  }
  componentWillReceiveProps(nextProps) {
    // if(nextProps.loggedIn !== this.props.loggedIn) {
    //   nextProps.loggedIn === true ? window.location.href = "/feeds" : ''
    // }
  }

  getQueryStringValue = (key) => {
    // return decodeURIComponent(window.location.search.replace(new RegExp("^(?:.*[&\\?]" + encodeURIComponent(key).replace(/[\.\+\*]/g, "\\$&") + "(?:\\=([^&]*))?)?.*$", "i"), "$1"));  
  }

  verifyCode = () => {
    const verificationId = this.getQueryStringValue('verification');
    const verificationUrl = "http://13.127.28.147:3000/verify-code";
    const opts = {
      verification: verificationId
    }
    if(verificationId) {
      fetch(verificationUrl, {
        method: 'post',
        body: JSON.stringify(opts),
        headers: { "Content-Type": "application/json; charset=utf-8" }
      }).then((response) => response.json()).then((data) => {
        this.setState({
          registerSuccess: data.message,
          isVerified: data.status
        });
        // if(data.status) {
        //   setTimeout(() => {
        //     window.location.href = "/login";
        //   }, 3000);
        // }
        console.log('Created Gist:', data);
      }).catch((err) => {
        this.setState({
          registerSuccess: err
        });
      });
    }
  }

  enteredEmail(e, email) {
    e.preventDefault();
    if(email) {
      this.setState({ showPassword: true});
    };
  }
  render() {
    return (
      <div>
        {this.state.isVerified && 'verified successfully'}
        {!this.state.isVerified && 'verifying Code'}
        <br />
        <br />
        {this.state.isVerified && <a href="/" style={{color: "blue"}}>Login Now</a>}
      </div>
    );
  }
}


export default Login;
