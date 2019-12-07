import React from 'react';
import './postModal.scss';

import PostDoc from './../PostDoc/PostDoc.js';
import PostProj from './../PostProject/PostProject.js';

class Modal extends React.Component {
  render() {
    return (
      <div className="modal fade" id={this.props.modalId} tabIndex="-1" role="dialog" aria-labelledby="modalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="modalLabel">{this.props.modalTitle}</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            {
              this.props.document ? 
              <div className="modal-body">
                  <PostDoc />
              </div> : ''
            }
            { 
              this.props.project ? 
              <div>
                <div className="modal-body">
                    <PostProj />
                </div>
                <div className="modal-footer">

                </div>
              </div>: ''
            }
          </div>
        </div>
      </div>
      )
  }
}

export default Modal;
