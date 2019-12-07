import React from 'react';
import './actionButtons.scss';

class ActionButtons extends React.Component {
  render() {
    return (
        <div className={"actionButtons col-lg-1 col-sm-2 col-12"}>
         <div className="card col-lg-10 col-sm-8">
          <div className="card-body">
            <div className="row">
              <div className="col-md-11 col-sm-12 col-2 text-center action-btns">
                  <i className="flaticon-home"></i>
              </div>
              <div className="col-md-11 col-sm-12 col-2 text-center action-btns">
                <i className="flaticon-notification"></i>
              </div>
              <div className="col-md-11 col-sm-12 col-2 text-center action-btns">
                <i className="flaticon-connections"></i>
              </div>
              <div className="col-md-11 col-sm-12 col-2 text-center action-btns">
                <i className="fa fa-comment"></i>
              </div>
              <div className="col-md-11 col-sm-12 col-2 text-center action-btns">
                <i className="flaticon-settings"></i>
              </div>
            </div>
          </div>
          </div>
        </div>
      )
  }
}

export default ActionButtons;
