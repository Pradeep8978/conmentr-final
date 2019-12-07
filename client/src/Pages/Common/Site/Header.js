import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div className="navigationBarBlock">
                <div className="navigationBarBlockInr">
                    <div className="logo_main">
                        <span className="navbar-brand" href="#">
                            <img src="./images/header_logo.png" alt="HeadLogo" />
                        </span>
                    </div>
                    <div className="navigationBar">
                        <ul className="m-0 float-right">
                            <li className="nav_item_active">
                                <button className="bttn_link">HOME</button>
                            </li>
                            <li>
                                <button className="bttn_link">ABOUT</button>
                            </li>
                            <li>
                                <button className="bttn_link">SERVICE</button>
                            </li>
                            <li>
                                <button className="bttn_link">WORK</button>
                            </li>
                            <li>
                                <button className="bttn_link">BLOG</button>
                            </li>
                            <li>
                                <button className="bttn_link">CONTACT</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        );
    }
}

export default Header;