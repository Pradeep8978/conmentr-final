import React from 'react';
import { Link } from "react-router-dom";
import './textCard.scss';

class TextCard extends React.Component {
  render() {
    return (
        <div className={this.props.classes + " card textCard"} data-wow-delay="0.5s">
          <div className="card-body">
            <h2 className="card-title  mb-4">{this.props.title}</h2>
            <p className="card-text  mb-4">{this.props.cardText}</p>
            { this.props.showBtn && <Link to={this.props.buttonLink}><div className="btn-generic btn-bg-white width-110p"><label>{this.props.buttonText}</label></div></Link> }
          </div>
        </div>
      )
  }
}

export default TextCard;
