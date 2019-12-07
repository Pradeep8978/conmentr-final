import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer id="contact" className="col-sm-12 page-footer font-small indigo bg_color float-left">
        <div className="container cgap">
          <div className="row">
            <div className="col-md-4 mx-auto lm_top">
              <button className="bttn_link"><img alt="" src="./images/footer_logo.png" /></button>
            </div>
            {/* Grid column */}
            <div className="col-md-2 mx-auto mar_top">
              <h5 className="f_hea">COMPANY</h5>
              <ul className="list-unstyled list_l">
                <li>
                  <button className="bttn_link">ABOUT US</button>
                </li>
                <li>
                  <button className="bttn_link">BLOG</button>
                </li>
              </ul>
            </div>
            {/* Grid column */}
            <div className="col-md-2 mx-auto top_m">
              {/* Links */}
              <ul className="list-unstyled gaps list_l">
                <li>
                <button className="bttn_link">JOBS</button>
                </li>
                <li>
                <button className="bttn_link">BECOME A MENTOR</button>
                </li>
              </ul>
            </div>
            {/* Grid column */}
            <div className="col-md-2 mx-auto mar_top">
              <h5 className="f_hea">SUPPORT</h5>
              <ul className="list-unstyled gaps list_l">
                <li>
                <button className="bttn_link">CONTACT US</button>
                </li>
                <li>
                <button className="bttn_link">HELP &amp; FAQ</button>
                </li>
              </ul>
            </div>
            {/* Grid column */}
            <div className="col-md-2 mx-auto top_m">
              <ul className="list-unstyled gaps list_l">
                <li>
                <button className="bttn_link">PRIVACY</button>
                </li>
                <li>
                <button className="bttn_link">TERMS</button>
                </li>
              </ul>
            </div>
          </div>
          {/* Grid row */}
        </div>
        {/* Footer Links */}
        {/* Copyright */}
        <div className="container"><hr /></div>
        <div className="py-3">
          <div className="row">
            <div className="col-sm-4" />
            <div className="col-sm-4 footer_div">2018 - 2019 © <span className="footer_text">Conmentr</span>, Inc</div>
            <div className="col-sm-4" />
          </div>
        </div>
        {/* Copyright */}
      </footer>

    );
  }
}

export default Footer;