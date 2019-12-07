import React from 'react';
import WOW from "wowjs";

import './blogContainer.scss';

import BlogCardI from './../BlogCardI/BlogCardI.js';
import BlogCardII from './../BlogCardII/BlogCardII.js';


class BlogContainer extends React.Component {
  componentDidMount(){
    const wow = new WOW.WOW();
    wow.init();
  }
  render() {
    return (
      <div className="blog-wrap">
      <h2>Popular Blogs</h2>
        <div className="row mb-5 mt-1">
          {[1,2,3,4,5,6].map(items => (
                <BlogCardI />
          ))}
        </div>

        <h2>Browse More</h2>
        <div className="row mt-1">
          {[1,2,3,4].map(items => (
                <BlogCardII />
          ))}
        </div>
      </div>
    );
  }
}

export default BlogContainer;
