import React from 'react';
import './mentorCardFlat.scss';

class MentorCard extends React.Component {
  render() {
    return (
        <div className={"mentorCardFlat card"+this.props.classes}>
          <div className="card-body">
            <div className="row">
              <div className="col-lg-2 col-sm-3 col-5">
                <img alt="mentor pic" src="//via.placeholder.com/115x105"/>
              </div>
              <div className="col-md-3 col-sm-3 col-7">
                <h6 className="card-title">{this.props.title}</h6>
                <p className="card-description">{this.props.designation}</p>
                <img alt="" src="//subrains.org/images/subrains.png" className="company-image"/>
              </div>
              <div className="col-md-4 col-sm-4  col-12">
                <h6 className="card-title">Skills: </h6>
                <p className="card-description">{this.props.skills}</p>
                <p className="rate">Cost: {`$${this.props.rate} /minute `}</p>
              </div>
            </div>
            <div className="row about-row mt-2">
              <div className="col-lg-12 col-sm-12 col-12">
                <h6>About Mentor:</h6>
                <p className="card-text">{this.props.cardText}</p>
              </div>
              <div className="col-lg-3 col-sm-6 col-8 ml-auto btn-generic btn-bg-white request-mentor-btn">
                <div>
                  <a href={this.props.buttonLink} >{this.props.buttonText}</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
  }
}

export default MentorCard;
