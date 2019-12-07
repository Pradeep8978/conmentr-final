import React from 'react';
import './startupCard.scss';

class StartupCard extends React.Component {
  render() {
    return (
        <div className={"startupCard card col-md-12 col-sm-12 col-12  "+this.props.classes}>
          <div className="card-body">
            <div className="row">
              <div className="col-md-3 col-sm-4 col-6">
                <img src="//via.placeholder.com/180x180"/>
              </div>
              <div className="col-md-8 col-sm-8 col-12">
                <h6 className="card-title">{this.props.title}</h6>
                <hr />
                <h6>Work With Us</h6>
                <h6>Connect With Us</h6>
                <h6>About Us:</h6>
                <p className="card-text">{this.props.cardText}</p>
              </div>
            </div>
            <div className="row mt-3">
              <p>Icons here</p>
              <a href="#" role="button" className="btn btn-primary-color ml-auto">Know More</a>
            </div>
          </div>
        </div>
      )
  }
}

export default StartupCard;
