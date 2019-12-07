import React from 'react';
import { Tile } from 'carbon-components-react';
import Navbar from '../../Components/Common/Navbar/Navbar.js';
import Prices from './Prices.js';
import './pricing.scss';
import tiers from './tierMock'

class Pricing extends React.Component {
  render() {
    return (
      <div className="pricing">
            <Navbar
            home = "true"
            classes="mb-0"/>
            <div className="container">
                <div className="col-lg-12 row mx-auto m-3">
                    {
                        tiers.map((tierData) =>
                            <Tile className="col-12 col-sm-12 col-lg-3 col-xs-3 pull-left generic-shadow mg-b-20 pricing-sections offset-sm-0 offset-lg-1">
                                <Prices tierData = {tierData}/>
                            </Tile>
                        )
                    }
                </div>
            </div>
      </div>
    );
  }
}

export default Pricing;
