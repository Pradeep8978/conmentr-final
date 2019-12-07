import React from 'react';
import {Link} from 'react-router-dom';

import './footer.scss';

class Footer extends React.Component {
    render(){
        return(
            <footer>
                <div className="footer" id="footer">
                    <div className="container-fluid">
                        <div className="row justify-content-center">
                            <div className="col-lg-2 col-md-2 col-sm-2 col-12">
                                <h3>{' '}</h3>
                                <ul>
                                    <li> </li>
                                    <li> <a href="/"> Students Community </a> </li>
                                    <li> <a href="/"> Partnered Companies </a> </li>
                                </ul>
                            </div>
                            <div className="col-lg-2  col-md-2 col-sm-4 col-12">
                                <h3> Company </h3>
                                <ul>
                                    <li> <Link to="/About"> About us </Link> </li>
                                    <li> <Link to="/feeds#pills-blog"> Blog </Link> </li>
                                    <li> <a href="/"> Careers </a> </li>
                                </ul>
                            </div>
                            <div className="col-lg-2  col-md-2 col-sm-4 col-12">
                                <h3> Support </h3>
                                <ul>
                                    <li> <a href="/"> Contact us </a> </li>
                                    <li> <a href="/"> Help & FAQ </a> </li>
                                    <li> <a href="/"> Legal and Privacy </a> </li>
                                </ul>
                            </div>
                            <div className="col-lg-2  col-md-2 col-sm-4 col-12">
                                <h3> Business </h3>
                                <ul>
                                    <li> <Link to="/MentorSignup"> Become a Mentor </Link> </li>
                                    <li> <a href="/"> Pricing of Products </a> </li>
                                    <li> <a href="/"> Hire Graduates </a> </li>
                                </ul>
                            </div>
                            <div className="col-lg-2  col-md-2 col-sm-4 col-6">
                                <h3> </h3>
                                <ul>
                                    <li> <a href="/"> <img alt="conmentr" src={require("../images/subrains.png")} /> </a> </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="container-fluid">
                        <p className="">© 2017-2018 Subrains Solutions Private Limited.  <a href="/">Legal and Privacy</a> </p>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;
