import React from 'react';
import './mentorProfile.scss';

class MentorProfile extends React.Component {
  render() {
    return (
      <div className="mentorHeader card bg-white">
        <div className="profile row">
          <div className="col-md-4 col-sm-4 col-3">
            <img alt="propic" src="//via.placeholder.com/80x80" className="rounded-box" />
          </div>
          <div className="col-md-7 col-sm-7 col-7">
            <h6 className="mt-1">{ this.props.profileData && this.props.profileData.firstname }</h6>
            <h6 className="text-secondary">Profile Headline</h6>
            <h6 className="text-secondary">Company: { this.props.profileData && this.props.profileData.company }</h6>
          </div>
        </div>

        <div className="col-md-12 col-sm-12 col-12 mt-4 mb-4">
          <h6 className="text-secondary">Skills: { this.props.profileData && this.props.profileData.skills }</h6>
          <h6 className="text-secondary">location</h6>
        </div>

        <div className="col-md-12 col-sm-12 col-12">
          <h5>Network</h5>
          <h6 className="text-secondary">Followers: 25</h6>
          <h6 className="text-secondary">Following: 50</h6>
        </div>

        <div className="col-md-12 col-sm-12 col-12 mt-4">
          <h6 className="text-secondary">Credits Secured: 50</h6>
        </div>

      </div>
      )
  }
}

export default MentorProfile;
