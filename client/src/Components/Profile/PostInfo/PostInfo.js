import React from 'react';
import './postInfo.scss';

class PostInfo extends React.Component {
  render() {
    return (
          <div className="col-md-12 col-sm-12 col-12 mt-3 postInfo">
            <div className="row border mt-3 p-3">
            <p className="text-justify">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
            <a href="">Links if any</a>
            </div>
            <div className="row border">
              <div className="col-md-4 text-center border-right p-2">
                21<br/>Blogs
              </div>
              <div className="col-md-4 text-center border-right p-2">
                21<br/>Documents
              </div>
              <div className="col-md-4 text-center p-2">
                2<br/>Projects
              </div>
            </div>
          </div>
      )
  }
}

export default PostInfo;
