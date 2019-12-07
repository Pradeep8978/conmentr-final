import React from 'react';
import './infoCard.scss';

class InfoCard extends React.Component {
  render() {
    return (
      <div className="infoCard card bg-white">
        <div className="card-body text-center">
          <h2>{this.props.number}</h2>
          <h4>{this.props.cardText}</h4>
        </div>
      </div>
      )
  }
}

export default InfoCard;
