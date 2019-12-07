import React from 'react';
import MediumEditor from 'medium-editor';
import 'medium-editor/dist/css/medium-editor.min.css';
import 'medium-editor/dist/css/themes/beagle.css';

import './createBlog.scss';

import Navbar from '../../Components/Common/Navbar/Navbar.js';
import Footer from '../../Components/Common/Footer/Footer.js';
import BloggerProfile from './../../Components/Others/BloggerProfile/BloggerProfile.js';

class NewBlog extends React.Component {
  componentDidMount(){
    // var heading = new MediumEditor('.heading',{
    //   toolbar: false
    // });
    var editor = new MediumEditor('.editable');

    editor.subscribe('editableInput', function (event, editable) {
      console.log("change");
    });
  }
  render() {
    return (
        <div>
          <Navbar
            feeds = "true"
            classes= "feeds-nav mb-3"
          />

          <div className="blog w-50 mt-5 mb-3 mx-auto">
            <BloggerProfile />
            <div className="heading" data-placeholder="Title"></div>
            <div className="editable" data-placeholder="Content Goes here"></div>
          </div>

          <Footer />
        </div>
    );
  }
}

export default NewBlog;
