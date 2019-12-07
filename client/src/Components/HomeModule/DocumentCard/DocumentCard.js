import React from 'react';
import './documentCard.scss';

class DocumentCard extends React.Component {
  render() {
    return (
        <div className={"documentCard card col-md-12 col-sm-12 col-12  "+this.props.classes}>
          <div className="card-body">
            <div className="row">
              <div className="col-md-12 col-sm-12 col-12">
                <h5 className="card-title">{this.props.title}</h5>
              </div>
            </div>
            <div className="row about-row">
              <div className="col-md-12 col-sm-12 col-12">
                <p className="card-text">{this.props.cardText}</p>
                <span className="tags">{this.props.domain}</span>
              </div>
            </div>
          </div>
          <div className="card-footer">
            <div className="row">
              <div className="col-md-2 col-sm-2 col-6 mt-2 ml-2">
                 <p>By: {this.props.author}</p>
              </div>
              <div className="col-md-2 col-sm-2 col-6 ml-auto btn-wrapper">
                <a role="button" className="btn btn-primary-color">Download</a>
              </div>
            </div>
          </div>
        </div>
      )
  }
}

export default DocumentCard;
