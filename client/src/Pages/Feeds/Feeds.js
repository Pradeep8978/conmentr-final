import React from 'react';
import WOW from "wowjs";

import './Feeds.scss';

import Navbar from '../../Components/Common/Navbar/Navbar.js';
import WritePost from './../../Components/HomeModule/WritePost/WritePost.js';
import ActionButtons from './../../Components/HomeModule/ActionButtons/ActionButtons.js';
import TabContent from './../../Components/HomeModule/TabContent/TabContent.js';
import Footer from '../../Components/Common/Footer/Footer.js'
import ProjectWindow from './../../Components/HomeModule/ProjectWindow/ProjectWindow.js';
import SearchWindow from './../../Components/HomeModule/SearchWindow/SearchWindow.js';
import { connect } from 'react-redux';
import { userActions } from '../../_actions';

class Feeds extends React.Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);
  }

  componentDidMount(){
    const wow = new WOW.WOW();
    wow.init();
  }
  logOut() {
    this.props.dispatch(userActions.logout());
    window.location.href = "/login";
  }
  render() {
    const { loggedIn } = this.props;
    return (
        <div className="feeds">
          <Navbar
            feeds = "true"
            search= "true"
            classes= "feeds-nav mb-3"
            loggedIn = {loggedIn}
            logOut = {this.logOut}
          />
          <WritePost />
          <div className="row">
            <ActionButtons />
            <TabContent />
          </div>
          <Footer />
          <ProjectWindow
            title="Project Title Here"
            techStack="Python: Development: Oracle/SQL"
            domain="Web Development"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap"
          />
          <SearchWindow />
        </div>
    );
  }
}

function mapStateToProps(state) {
  const { loggedIn } = state.authentication;
  return {
    loggedIn
  }; 
}

export default connect(mapStateToProps)(Feeds);
