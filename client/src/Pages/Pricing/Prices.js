import React from 'react';

class Prices extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row pricing-content mx-auto">
            <div className="red-border-btn col-md-10 col-10  col-sm-6">
                { this.props.tierData.tier }
            </div>
            <div className="pricing-list">
            <ul>
                { 
                    this.props.tierData.benefits.map((benefit) =>
                        <li>
                            { benefit }
                        </li>
                    )
                }
                </ul>
            </div>
            <div className="pricing-btn mx-auto">
                { this.props.tierData.price }
            </div>
        </div>
      </div>
    );
  }
}

export default Prices;
