import React from 'react';
// import ReactDOM from 'react-dom';

// import {Link} from 'react-router-dom';

import './writePost.scss';

import Modal from './../PostModal/PostModal.js';

class WritePost extends React.Component {
  render() {
    return (
      <div>
        {/* <div className={"writePost row align-items-center "+this.props.classes}>
          <div className="offset-md-2 offset-sm-2 text-center col-md-3 col-sm-3 col-12">
            <Link to="/NewBlog"><h5>Write a blog <i className="fa fa-pencil"></i></h5></Link>
          </div>
          <div className="col-md-3 col-sm-3 col-12 text-center">
            <h5 data-toggle="modal" data-target="#documentModal">Post a document <i className="fa fa-file-text"></i></h5>
          </div>
          <div className="col-md-3 col-sm-3 col-12 text-center">
            <h5 data-toggle="modal" data-target="#projectModal">Share a project <i className="fa fa-share-alt"></i></h5>
          </div>
        </div> */}

        <Modal
          modalId="documentModal"
          modalTitle="Post a Document"
          document
        />

        <Modal
          modalId="projectModal"
          modalTitle="Post a Project"
          project
        />

      </div>
      )
  }
}

export default WritePost;
