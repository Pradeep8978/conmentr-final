import React from 'react';
import MentorProfile from './../../Components/Profile/MentorProfile/MentorProfile.js';

import './play.scss';

class Play extends React.Component {
  render() {
    return (
      <div className="m-3">
      <div className="col-md-3 col-sm-3 col-12">
        <MentorProfile />
      </div>
      </div>
    );
  }
}

export default Play;
