import React from 'react';
import './profileHeader.scss';

class ProfileHeader extends React.Component {
  render() {
    return (
      <div className="profileHeader">
        <div className="profile row align-items-center">
          <div className="col-md-3 col-sm-3 col-12 text-center">
            <img alt="img" src="//via.placeholder.com/160x160" className="rounded-box" />
          </div>
          <div className="col-md-6 col-sm-6 col-12">
            <h3 className="mt-1 mb-0">{ 
              // this.props.profileData.firstname 
              'Vikas'
               }</h3>
            <h5 className="text-secondary">Profile Headline</h5>
            <p className="text-secondary">location</p>
            <div className="row align-items-center mt-5">
              <div className="col-md-3 col-sm-3 col-12 bg-white text-center border-right p-1">
                Expert Level<br/>
                4 years of Experience
              </div>
              <div className="col-md-3 col-sm-3 col-12 bg-white text-center border-right p-1">
                31<br/>Followers
              </div>
              <div className="col-md-3 col-sm-3 col-12 p-0">
                <button className="btn btn-primary round-0 btn-block follow-button">Follow</button>
              </div>
              <div className="col-md-3 col-sm-3 col-12 p-0">
                  <button className="btn btn-light round-0 message-button">Send Message</button>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-3 col-12">
            Social media icons
          </div>
        </div>
      </div>
      )
  }
}

export default ProfileHeader;
