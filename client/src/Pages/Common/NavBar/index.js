import React from 'react';
import './navBar.scss';
import $ from 'jquery';
import './line_button.css';
import './lp.css';
import './Login.css';
import './seeOurTemplates.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { userActions } from './../../../_actions';
import { withRouter } from 'react-router-dom';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'

class NavBar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: '',
			registerSuccess: ''
		}
	}

	onSubmit = async (formData) => {
		await this.props.signIn(formData);
		if (!this.props.errorMessage) {
			this.props.history.push('/dashboard');
		}
	}

	responseGoogle = async (res) => {
		await this.props.oauthGoogle(res.accessToken);
		if (!this.props.errorMessage) {
			this.props.history.push('/dashboard');
		}
	}

	async responseFacebook(res) {
		await this.props.oauthFacebook(res.accessToken);
		if (!this.props.errorMessage) {
			this.props.history.push('/dashboard');
		}
	}

	loadAnimation = () => {
		$(function () {
			$(document).scroll(
				function () {
					var $nav = $(".sticky-top");
					$nav.toggleClass('scrolled', $(this).scrollTop() > $nav
						.height());
					var $nav1 = $(".logo");
					$nav1.toggleClass('scrolled',
						$(this).scrollTop() > $nav1.height());
				});
			$('#loginbtn').click(function () {
				$('.modal').addClass('open');

				if ($('.modal').hasClass('open')) {
					$('.cont').addClass('blur');
				}
			});

			$('.close').click(function () {
				$('.modal').removeClass('open');
				$('.cont').removeClass('blur');
			});
		});
	}

	componentDidMount() {
		this.loadAnimation();
	}

	validate = () => {
		if (!this.state.email) {
			return false;
		} else if (!this.state.password) {
			return false;
		}
		return true;
	}

	handleSubmit = async (e) => {
		if (!this.validate()) {
			alert('Please fill mandatory fields');
		} else {
			e.preventDefault();
			const formData = {
				email: this.state.email,
				password: this.state.password
			}
			//Service call
			await this.props.signIn(formData);
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
	responseGoogle = async(res) => {
		await this.props.oauthGoogle(res.accessToken);
		if (!this.props.errorMessage) {
		  this.props.history.push('/MentorProfile');
		}
	  }
	
	  responseFacebook = async(res) => {
		await this.props.oauthFacebook(res.accessToken);
		if (!this.props.errorMessage) {
		  this.props.history.push('/MentorProfile');
		}
	  }

	render() {

		return (
			<div>
				<nav className="navbar navbar-expand-sm sticky-top navbar-light bg-light" style={{ height: 'auto' }}>
					{/* Brand/logo */}
					<a className="navbar-brand" href="void:javscript(0)" >
						<img className="landing-logo" src alt="" />
					</a>
					<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
						<span class="navbar-toggler-icon"></span>
					</button>

					{/* Links */}
					<div className="collapse navbar-nav ml-auto" id="navbarToggleExternalContent">
						<strong>
							<Link className="nav-item nav-link" to="/features">Features</Link>
						</strong>
						<strong>
							<Link className="nav-item nav-link" to="/About">About us</Link>
						</strong>
						<strong>
							<Link className="nav-item nav-link" to="#" id="loginbtn">Login</Link>
						</strong>
						<strong>
							<Link className="nav-item nav-link" to="/register">
								<span>Register</span></Link>
						</strong>
						{/* <strong>
								<Link className="nav-item nav-link" to="/code-collab">
								<span>Code Collab</span></Link>
							</strong> */}
					</div>
				</nav>
				<div className="modal">
					<div className="content">
						<div className="box1">
							<h2>Login</h2>
							<div className="close">
								<i className="fa fa-times" aria-hidden="true" />
							</div>
							<form>
								<div className="inputBox">
								<label>Username</label>
									<input type="text" value={this.state.email} name="email" required onChange={(e) => this.handleChange(e)} />
								</div>
								<div className="inputBox">
								<label>Password</label>
									<input type="password" value={this.state.password} name="password" required onChange={(e) => this.handleChange(e)} />
								</div>
								<div className="inputBox">
									<input type="checkbox" name required className="checkBox" />
									<span className="rememberme">Remember Me</span>
									<p className="fp">
										<button className="btn btn-link forgot_pwd">Forgot Password?</button>
									</p>
								</div>
								<input type="submit" name defaultValue="Submit" className="btn btn-primary" onClick={(e) => this.handleSubmit(e)} />
								<FacebookLogin
									appId="2273900542721665"
									render={renderProps => (
										<a onClick={renderProps.onClick} 
										className="linkedin sociobtn rounded-circle">
											<img alt="facebook" src={require("../../../assets/images/fb3.png")} />
										</a>
									)}
									fields="name,email,picture"
									callback={this.responseFacebook}
									cssClass="btn btn-outline-primary"
								/>
								<GoogleLogin
									clientId="338601550454-1u2bn4i06l30sn0brqgshlqu3jnn7f2h.apps.googleusercontent.com"
									render={renderProps => (
										<a onClick={renderProps.onClick} disabled={renderProps.disabled} className="google sociobtn rounded-circle">
											<img alt="google" src={require("../../../assets/images/search.png")} />
										</a>
									)}
									onSuccess={this.responseGoogle}
									onFailure={this.responseGoogle}
									className="btn btn-outline-danger"
								/>

							</form>
						</div>
					</div>
				</div>
				<div className="cont">
					<div className="container-fluid" ng-view />
				</div>
			</div>
		)
	}
};

const mapStateToProps = state => ({
	errorMessage: state.users.errorMessage
})

const mapDispatchToProps = {
	...userActions
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavBar));