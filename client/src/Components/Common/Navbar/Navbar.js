import React from 'react';
import { Link } from "react-router-dom";
import $ from 'jquery';
import './navbar.scss';
import { userActions } from '../../../_actions';
import { connect } from 'react-redux';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
    // this.handleClick = this.handleClick.bind(this);
  };

  componentDidMount() {
    $(document).scroll(function(){
      if($(this).scrollTop() > 550){
       $('.navbar-custom').removeClass('navbar-abs').addClass('fixed-top');
      }
      if($(this).scrollTop() < 550){
       $('.navbar-custom').addClass('navbar-abs').removeClass('fixed-top');
      }
    });
  }

  // handleClick() {
  //   fetch(url, {
  //     method: 'post',
  //     headers: {
  //       "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
  //     },
  //     body: 'foo=bar&lorem=ipsum'
  //   })
  //   .then(json)
  //   .then(function (data) {
  //     console.log('Request succeeded with JSON response', data);
  //   })
  //   .catch(function (error) {
  //     console.log('Request failed', error);
  //   });
  // }
  
  handleLogout() {
    this.props.dispatch(userActions.logout());
  }
  getUserName = () => {
    const userData = JSON.parse(localStorage.getItem('userAuth'));
    let userName = '';
    if(userData) {
      userName = `${userData.profile.firstName && userData.profile.firstName} ${userData.profile.lastName ? userData.profile.lastName: ''}`;
    }
    return(<div className="pull-right">
                        <label className="font-weight-bold align-bottom">Welcome {userName}</label>
                       <button type="button" className="btn btn-default" onClick={this.handleLogout}>Logout</button>
                      </div>);
  }
  responseGoogle = async(res) => {
    await this.props.oauthGoogle(res.accessToken);
    if (!this.props.errorMessage) {
      this.props.history.push('/dashboard');
    }
  }

  responseFacebook = async(res) => {
    await this.props.oauthFacebook(res.accessToken);
    if (!this.props.errorMessage) {
      this.props.history.push('/dashboard');
    }
  }
  render() {
    const { loggedIn } = this.props;
    return (
      <nav className={`navbar navbar-expand-lg ${(this.props.home === "true") && this.props.classes}`}>
        <Link className="navbar-brand" to="/"><img alt="img" src={require("../images/subrains.png")} /></Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
          <i className="fas fa-bars"></i>
        </button>
          <div className={`collapse navbar-collapse  ${(this.props.home !== "true") && this.props.classes}`} id="navbarSupportedContent">
          {
              this.props.home === "true" ?
              <ul className="navbar-nav ml-auto">
                {/* <li className="nav-item pr-md-5">
                  <Link className="nav-link" to="/MentorProfilePage">Learnings</Link>
                </li> */}
                <li className="nav-item">
                  <Link to="/About" className="nav-link" >Company</Link>
                </li>
                <li className="nav-item">
                  <Link to="/pricing" className="nav-link">Pricing</Link>
                </li>
                <li className="nav-item">
                  { loggedIn ? <button type="button" className="btn" onClick={this.handleLogout}>Logout</button> : <Link to="/Login"><div className="btn-generic width-90p">
                    <label>Login</label>
                  </div></Link> }
                </li>
              </ul> : ''
            }
            {
              this.props.feeds === "true" ? 
              <div className="col-md-12">
                <div className="col-md-8 float-left">
                  {
                    this.props.search === "true" ?
                    <ul className="navbar-nav mr-auto">
                      <li className="nav-item ml-5">
                        <a href="#search" data-toggle="collapse" role="button" aria-expanded="false" aria-controls="search" className="btn"><input type="text" /></a><label class="font-weight-bold align-bottom">Search</label>
                      </li>
                    </ul> :'' 
                  }
                </div>
                <ul className="navbar-nav ml-auto col-md-4 float-right">
                  {/* <li className="nav-item">
                    <Link to="/AddCredits"><span className="tags">0 C</span></Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/ProfilePage"><img alt="img" src="//via.placeholder.com/40x40" className="rounded-circle mr-md-3"/></Link>
                  </li> */}
                  <li className="nav-item col-md-12">
                    { loggedIn ?
                      this.getUserName()
                      : '' }
                  </li>
                </ul>
              </div>
            :''}
          </div>
      </nav>
      )
  }
}

function mapStateToProps(state) {
  // const { loggedIn } = state.authentication;
  // return {
  //   loggedIn
  // }; 
}

export default connect(mapStateToProps)(Navbar);