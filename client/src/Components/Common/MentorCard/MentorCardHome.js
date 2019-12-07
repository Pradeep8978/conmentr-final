import React from 'react';
import './mentorCard.scss';

class MentorCardHome extends React.Component {
  render() {
    return (
        <div className={"mentorCardHome card col-lg-6 col-sm-5 col-6 "+this.props.classes} data-wow-delay="1s">
          <div className="card-body">
            <div className="row mb-3">
              <div className="col-lg-3 col-sm-4 col-4">
                <img alt="mentor" className="rounded-circle mentor" src="//via.placeholder.com/115x105"/>
              </div>
              <div className="col-lg-6 col-sm-6 col-6 pad-15-0">
                <h5 className="card-title">{this.props.title}</h5>
                <h6 className="card-title">{this.props.designation}</h6>
              </div>
            </div>
            <h6 className="card-title font-weight-bold">Company: </h6>
            <div>
                <div className="pull-left">{this.props.skills}</div>
                <div className="btn-generic float-lg-right float-left req-mentorship-btn">
                  <label>
                    {this.props.primaryBtnText}
                  </label>
                </div>
            </div>
            <p className="clear-both"> </p>
            <h5 className="font-weight-bold">Mentor Description:</h5>
            <p className="card-text mb-3">{this.props.cardText}</p>
            {/* <div className="row">
              <div className="col-lg-4 col-sm-4 col-6">
                <a href={this.props.buttonLink} className="btn btn-primary-color">{this.props.buttonText}</a>
              </div>
              <div className="col-lg-3 col-sm-3 col-6 ml-auto">
                <h5 className="rate">{this.props.rate +"/minute "}</h5>
              </div>
            </div> */}
          </div>
        </div>
      )
  }
}

export default MentorCardHome;