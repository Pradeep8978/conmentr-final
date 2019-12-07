import React from 'react';
import './bloggerProfile.scss';

class BloggerProfile extends React.Component {
  render() {
    return (
      <div className="blogger-profile row">
        <div className="">
          <img alt="blgger" src="//via.placeholder.com/60x60" className="rounded-box" />
        </div>
        <div className="col-md-9 col-sm-9 col-6 mb-3">
          <p className="mt-1 mb-0">Pratik Singh</p>
          <p className="text-secondary desc">Description goes here</p>
        </div>
      </div>
      )
  }
}

export default BloggerProfile;
