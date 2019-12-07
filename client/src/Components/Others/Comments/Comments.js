import React from 'react';
import './comments.scss';

class Comments extends React.Component {
  render() {
    return (
      <div className="row comments">
        <div className="form-group col-md-12 col-sm-12 col-12 mt-3">
          <textarea className="form-control rounded-0" id="comment" rows="3" placeholder="Write your response here"></textarea>
        </div>
        <div className="liveComments col-md-12 col-sm-12 col-12 mt-3">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s
          <div className="mt-2">Profile information of Commentor</div>
        </div>
      </div>
      )
  }
}

export default Comments;
