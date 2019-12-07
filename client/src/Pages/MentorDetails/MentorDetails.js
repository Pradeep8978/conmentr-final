import React from 'react';
// import ReactDOM from 'react-dom';
// import WOW from "wowjs";
import { connect } from 'react-redux';
import { userActions } from '../../_actions';
import './mentorDetails.scss';

import Navbar from '../../Components/Common/Navbar/Navbar.js';
import MentorDetailsForm from './../../Components/LoginModule/MentorDetails/MentorDetails.js';
import Footer from '../../Components/Common/Footer/Footer.js';

class MentorDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showNextStep: false
    }
    this.nextStep = this.nextStep.bind(this);
    this.updateMentorProfile = this.updateMentorProfile.bind(this);
  }
  nextStep(e) {
    e.preventDefault();
    this.setState({ showNextStep: true });
  }
  updateMentorProfile(values){
    this.props.dispatch(userActions.updateMentorProfile(values));
  }
  render() {
    return (
      <div className="mentor-signup">
        {
          this.props.mentorUpdated && <div className="alert alert-success alert-dismissible">
            <a href="/" className="close" data-dismiss="alert" aria-label="close">&times;</a>
            <strong>Profile Updated!</strong>
          </div>
        }
        <Navbar />
        <div className="container-fluid">
          <div className="row signup-row justify-content-center">
            <div className="col-md-4 col-sm-4 col-12 my-auto wow fadeIn">
              <MentorDetailsForm updateMentorProfile={this.updateMentorProfile} nextStep={this.nextStep} showNextStep = {this.state.showNextStep}/>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { mentorUpdated } = state.authentication;
  return {
    mentorUpdated
  }; 
}

export default connect(mapStateToProps)(MentorDetails);
