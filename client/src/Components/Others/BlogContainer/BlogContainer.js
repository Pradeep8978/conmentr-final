import React from 'react';
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  // EmailShareButton
} from 'react-share';

import {
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  // EmailIcon
} from 'react-share';

import BloggerProfile from './../BloggerProfile/BloggerProfile.js';
import Comments from './../Comments/Comments.js';

import './blogContainer.scss';

class BlogContainer extends React.Component {
  render() {
    return (
      <div className="shit-container col-md-9 col-sm-9 mb-3 mt-2 col-12 offset-md-1 offset-sm-1">
        <BloggerProfile />
        <div className={"blogContainer border mb-2"}>
          <div className="row header-image">
            <img alt="" src="" />
          </div>
          <div className="row">
            <div>
            </div>
          </div>
        </div>
        <div className="share-buttons row justify-content-end align-items-center">
          <FacebookShareButton url={window.location.href}>
            <FacebookIcon size={35} round/>
          </FacebookShareButton>
          <LinkedinShareButton url={window.location.href}>
            <LinkedinIcon size={35} round/>
          </LinkedinShareButton>
          <TwitterShareButton url={window.location.href}>
            <TwitterIcon size={35} round/>
          </TwitterShareButton>
        </div>
        <Comments />
      </div>
      )
  }
}

export default BlogContainer;
