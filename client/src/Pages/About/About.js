import React from 'react';
import './about.scss';

import NavBar from '../Common/NavBar'
import Footer from '../../Components/Common/Footer/Footer.js';
import Team from './../../Components/Others/Team/Team.js';


class About extends React.Component {
  componentDidMount(){
    window.localStorage.getItem('token');
  }
  render() {
    return (
        <div className="about">
          <NavBar
          />

            <div className="row about-row mb-5 align-items-center">
              <div className="col-md-6 col-sm-6 col-12">
                  <h1 className="text-center">Passion towards change</h1>
              </div>
              <div className="col-md-6 col-sm-6 col-12 pt-6 pb-6 pl-5 bg-black text-white h-100">
                  <h3 className="mb-5">About Us</h3>
                  <p className="text-justify pr-5">Lorem ipsum dolor sit amet, id tation expetenda eam, at mei accumsan percipit inimicus. Purto rebum electram ex per, agam omnesque ut has, debet causae petentium ne duo. Mollis ponderum tacimates vim ne. Ius habeo recteque dissentiet at, cum ornatus suscipiantur no. Propriae aliquando sed in, tantas ubique saperet est te. Ex sea omnis virtute contentiones, ne mei option phaedrum corrumpit.Lorem ipsum dolor sit amet, id tation expetenda eam, at mei accumsan percipit inimicus. Purto rebum electram ex per, agam omnesque ut has, debet causae petentium ne duo. Mollis ponderum tacimates vim ne. Ius habeo recteque dissentiet at, cum ornatus suscipiantur no. Propriae aliquando sed in, tantas ubique saperet est te. Ex sea omnis virtute contentiones, ne mei option phaedrum corrumpit.</p>
              </div>
            </div>

          <Team />
          <Footer />
        </div>
    );
  }
}

export default About;
