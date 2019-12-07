import React from 'react';
// import WOW from "wowjs";
import './viewBlog.scss';

import Navbar from '../../Components/Common/Navbar/Navbar.js';
import Footer from '../../Components/Common/Footer/Footer.js'
import SearchWindow from './../../Components/HomeModule/SearchWindow/SearchWindow.js';
import BlogContainer from './../../Components/Others/BlogContainer/BlogContainer.js';
import ActionButtons from './../../Components/HomeModule/ActionButtons/ActionButtons.js';

class ViewBlog extends React.Component {
  render() {
    return (
        <div className="feeds">
          <Navbar
            feeds = "true"
            search = "true"
            classes= "feeds-nav mb-3"
          />
          <div className="row">
            <ActionButtons />
            <BlogContainer />
          </div>
          <Footer />
          <SearchWindow />
        </div>
    );
  }
}

export default ViewBlog;
