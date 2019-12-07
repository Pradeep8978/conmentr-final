import React from 'react';
import './mentorCard.scss';

class MentorCard extends React.Component {
  render() {
    return (
        <div className={"mentorCard card col-md-6 col-sm-5 col-12 offset-md-2 offset-sm-1 "+this.props.classes} data-wow-delay="1s">
          <div className="card-body">
            <div className="row mb-3">
              <div className="col-md-3 col-sm-3 col-6">
                <img alt="mentor" src="//via.placeholder.com/115x105"/>
              </div>
              <div className="col-md-6 col-sm-6 col-12">
                <h5 className="card-title">{this.props.title}</h5>
                <h6 className="card-title">{this.props.designation}</h6>
                <h6 className="card-title">Skills: {this.props.skills}</h6>
              </div>
            </div>
            <h5>About:</h5>
            <p className="card-text mb-3">{this.props.cardText}</p>
            <div className="row">
              <div className="col-md-4 col-sm-4 col-6">
                <a href={this.props.buttonLink} className="btn btn-primary-color">{this.props.buttonText}</a>
              </div>
              <div className="col-md-3 col-sm-3 col-6 ml-auto">
                <h5 className="rate">{this.props.rate +"/minute "}</h5>
              </div>
            </div>
          </div>
        </div>
      )
  }
}

export default MentorCard;
