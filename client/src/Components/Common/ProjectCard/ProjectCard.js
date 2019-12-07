import React from 'react';
import './projectCard.scss';

class ProjectCard extends React.Component {
  render() {
    return (
        <div className={"projectCard card " + this.props.classes} data-wow-delay="1s">
          <div className="card-body">
            <div className="row">
              <div className="col-md-4 col-sm-4 col-6">
                <h5>Term Project</h5>
              </div>
              <div className="col-md-3 col-sm-3 col-6 ml-auto">
                <img alt="img" src="//via.placeholder.com/45x147" />
              </div>
            </div>
            <h5>Abstract:</h5>
            <p className="card-text mb-3">{this.props.cardText}</p>
            <div className="row">
              <div className="col-md-3 col-sm-3 col-6">
                <h5 className="rate">{"Cost: " + this.props.rate}</h5>
              </div>
              <div className="col-md-4 col-sm-4 col-6 ml-auto">
                <h5 className="duration">{"Duration: " +this.props.duration}</h5>
              </div>
            </div>
            <h5>{"Project Posted By: " + this.props.recruiter}</h5>
          </div>
        </div>
      )
  }
}

export default ProjectCard;
