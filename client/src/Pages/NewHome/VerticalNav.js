
import React from 'react';
import { connect } from 'react-redux';
import './newHome.css';

class SideBar extends React.Component {

    render() {
        return (
            <div className="side_menu_bar">
                <div className="body_left float-left navigation_left_block ">
                <ul className="p-0 m-0">
                    <li className="active_left_nav">
                        <div className="navigation_item float-left">
                            <div className="navigation_item_img">
                                {/* <img src="./images/home_1.png" /> */}
                                <i class="fa fa-home" aria-hidden="true"></i>
                            </div>
                            <div className="navigation_item_text">
                                Home
                                </div>
                        </div>
                    </li>
                    <li>
                        <div className="navigation_item float-left">
                            <div className="navigation_item_img">
                                {/* <img src="./images/notification.png" /> */}
                                <i class="fa fa-bell" aria-hidden="true"></i>

                            </div>
                            <div className="navigation_item_text">
                                Notifications
                                    </div>
                        </div>
                    </li>
                    <li>
                        <div className="navigation_item float-left">
                            <div className="navigation_item_img">
                                {/* <img src="./images/messaging.png" /> */}
                                <i class="fa fa-comment" aria-hidden="true"></i>

                            </div>
                            <div className="navigation_item_text">
                                Messaging
                                </div>
                        </div>
                    </li>
                    <li>
                        <div className="navigation_item float-left">
                            <div className="navigation_item_img">
                                {/* <img src="./images/suitcase.png" /> */}
                                <i class="fa fa-share" aria-hidden="true"></i>

                            </div>
                            <div className="navigation_item_text">
                                Share
                                    </div>
                        </div>
                    </li>
                    <li>
                        <div className="navigation_item float-left">
                            <div className="navigation_item_img">
                                {/* <img src="./images/suitcase.png" /> */}
                                <i class="fa fa-cogs" aria-hidden="true"></i>

                            </div>
                            <div className="navigation_item_text">
                                Settings
                                    </div>
                        </div>
                    </li>
                   
                </ul>

            </div>
                {/* <div className="side_sub_navigator">
                    <ul className="p-0 m-0 float-left">
                        <li className="active_left_sub_nav">
                            <div className="sub_nav_item float-left">
                                <div className="sub_nav_item_text">
                                    <i class="fa fa-globe" aria-hidden="true"></i> All
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="sub_nav_item float-left">
                                <div className="sub_nav_item_text">
                                    <i class="fa fa-user" aria-hidden="true"></i> Mentors
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="sub_nav_item float-left">
                                <div className="sub_nav_item_text">
                                    <i class="fa fa-rss" aria-hidden="true"></i> Blogs
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="sub_nav_item float-left">
                                <div className="sub_nav_item_text">
                                    <i class="fa fa-file-text-o" aria-hidden="true"></i> Documents
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="sub_nav_item float-left">
                                <div className="sub_nav_item_text">
                                    <i class="fa fa-tasks" aria-hidden="true"></i>  Projects
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="sub_nav_item float-left">
                                <div className="sub_nav_item_text">
                                    <i class="fa fa-star-o" aria-hidden="true"></i>  Start Ups
                                </div>
                            </div>
                        </li>
                    </ul>
                    <ul className="p-0 mx-0 mb-0 mt-3 float-left">
                        <li className="active_left_sub_nav">
                            <div className="sub_nav_item float-left">
                                <div className="sub_nav_item_text">
                                    <i class="fa fa-pencil" aria-hidden="true"></i> Write a blog
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="sub_nav_item float-left">
                                <div className="sub_nav_item_text">
                                    <i class="fa fa-file-text" aria-hidden="true"></i> Post A Document
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="sub_nav_item float-left">
                                <div className="sub_nav_item_text">
                                    <i class="fa fa-share" aria-hidden="true"></i> Share a project
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>  */}
            </div>
       
        );
    }
}

function mapStateToProps(state) {
    const { items } = state.users;
    return {
        items
    };
}

export default connect(mapStateToProps)(SideBar);
