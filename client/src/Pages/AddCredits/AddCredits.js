import React from 'react';
import './addCredits.scss';

import Navbar from '../../Components/Common/Navbar/Navbar.js';
import Footer from '../../Components/Common/Footer/Footer.js';
import Payment from './../../Components/Others/Payment/Payment.js';

class AddCredits extends React.Component {
  render() {
    return (
        <div className="credits">
          <Navbar
            feeds = "true"
            classes= "feeds-nav mb-3"
          />
          <Payment />
          <Footer />
        </div>
    );
  }
}

export default AddCredits;
