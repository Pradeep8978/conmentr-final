import React from 'react';
import './projectCardFlat.scss';

class ProjectCard extends React.Component {
  render() {
    return (
        <div className={"projectFlat card col-md-12 col-sm-12 col-12  "+this.props.classes}>
          <div className="card-body">
            <div className="row">
                <h3 className="card-title">{this.props.title}</h3>
            </div>
            <div className="row about-row">
              <div className="col-md-12 col-sm-12 col-12">
                <p className="card-text">{this.props.cardText}</p>
                <span className="tags">JavaScript</span>
                <span className="tags">AngularJs</span>
              </div>
            </div>
          </div>
          <div className="card-footer">
            <div className="row">
              <div className="col-md-2 col-sm-2 col-6 mt-2 ml-2">
                 <p>Verified</p>
              </div>
              <div className="col-md-2 col-sm-3 col-6 ml-auto btn-wrapper">
                <a href="#proj-details" data-toggle="collapse" role="button" aria-expanded="false" aria-controls="proj-details" className="btn btn-primary-color">Project Details</a>
              </div>
              <div className="col-md-2 col-sm-2 col-6 btn-wrapper">
                <a role="button" className="btn btn-primary-color">Bid</a>
              </div>
            </div>
          </div>
        </div>
      )
  }
}

export default ProjectCard;
