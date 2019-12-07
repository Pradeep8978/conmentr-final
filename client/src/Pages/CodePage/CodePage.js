import React from 'react';
import './about.scss';

class About extends React.Component {
  
  render() {
    return (
        <div className="about">
          <Navbar
            feeds= "true"
            search= "true"
            classes= "feeds-nav mb-0"
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
          <SearchWindow />
        </div>
    );
  }
}

export default About;
