import React from 'react';
// import WOW from "wowjs";
import Navbar from '../../Components/Common/Navbar/Navbar.js';
import ActionButtons from './../../Components/HomeModule/ActionButtons/ActionButtons.js';
import './dashboard.scss';
// import Slider from "react-slick";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        
    }
  }
  
  render() {
    // const settings = {
    //     dots: true,
    //     infinite: true,
    //     speed: 500,
    //     slidesToShow: 3,
    //     slidesToScroll: 3
    //   };
    return (
      <div className="dashboard">
        <Navbar search= "true" feeds = "true" loggedIn = "true" classes="feeds-nav mb-3"/>
        <div className="row">
            <ActionButtons />
            <div className="col-md-9 mt-2">
                <div className="col-md-12 row">
                    <div className="white-shadow-card col-md-3 offset-md-1 font-semibold">
                        Search Mentors
                    </div>
                    <div className="white-shadow-card col-md-3 offset-md-1 font-semibold">
                        Become Mentor
                    </div>
                </div>
                <div className="col-md-12 ad-section">
                    {/* <h1>AD section</h1> */}
                </div>
                <div className="col-md-12 recent-session">
                    <p className="font-semibold">Recent Sessions</p>
                    <div className="row offset-md-1">
                        <div className="col-md-4 session-card cards">
                            <div>
                                <div className="mentor-profile text-white">
                                    <img alt="" className="mentor-image rounded-box" src="https://lh3.googleusercontent.com/-eJruhaTP9ig/AAAAAAAAAAI/AAAAAAAAAAA/APUIFaPneMrzUY3vmJfRrgn0_uOzqaO7fA/mo/photo.jpg?sz=46" />
                                    <div>Mentor Name</div>
                                    <small className="font-weight-light">Designation</small>
                                </div>
                                <div className="mentor-skill-section">
                                    <p className="text-white">Mobile Application Development</p>
                                    <button>Continue Session</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-7 white-shadow-card cards start-connect">
                            <p>
                                Start a Personal Conversation with mentors get help in completing your Projects
                            </p>
                            <div className="purple-btn text-white">Start Connecting</div>
                        </div>
                    </div>
                </div>
                <div className="col-md-12 recent-session connected-mentor">
                    <p className="font-semibold">Connected mentors</p>
                    <div className="row  offset-md-1">
                        <div className="col-md-4 connected-mentor-card cards">
                            <div>
                                <div className="mentor-profile row">
                                    <img alt="" className="connected-mentor-image rounded-box" src="https://lh3.googleusercontent.com/-eJruhaTP9ig/AAAAAAAAAAI/AAAAAAAAAAA/APUIFaPneMrzUY3vmJfRrgn0_uOzqaO7fA/mo/photo.jpg?sz=46" />
                                    <div className="col-md-8">
                                        <div className="font-weight-bold">Mentor Name</div>
                                        <small className="font-weight-bold">Creative Director</small>
                                    </div>
                                </div>
                                <div className="mentor-skill-section">
                                    
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 connected-mentor-card cards">
                            <div>
                                <div className="mentor-profile row">
                                    <img alt="" className="connected-mentor-image rounded-box" src="https://lh3.googleusercontent.com/-eJruhaTP9ig/AAAAAAAAAAI/AAAAAAAAAAA/APUIFaPneMrzUY3vmJfRrgn0_uOzqaO7fA/mo/photo.jpg?sz=46" />
                                    <div className="col-md-8">
                                        <div className="font-weight-bold">Mentor Name</div>
                                        <small className="font-weight-bold">Creative Director</small>
                                    </div>
                                </div>
                                <div className="mentor-skill-section">
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
