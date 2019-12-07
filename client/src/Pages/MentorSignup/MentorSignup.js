import React from 'react';
// import WOW from "wowjs";

import './mentorSignup.scss';

import Navbar from '../../Components/Common/Navbar/Navbar.js';
import SignupForm from '../../Components/LoginModule/SignupForm/SignupForm.js';
import Footer from '../../Components/Common/Footer/Footer.js';

class MentorSignup extends React.Component {
  render() {
    return (
      <div className="mentor-signup">
        <Navbar />
        <div className="container-fluid">
          <div className="row signup-row justify-content-center">
            <div className="col-md-4 col-sm-4 col-12 my-auto wow fadeIn">
              <SignupForm/>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default MentorSignup;
