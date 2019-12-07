import React from 'react';
import {Link} from 'react-router-dom';

import './blogCardI.scss';

class BlogCardI extends React.Component {
  render() {
    return (
      <div className="col-md-4 col-sm-4 col-12 mb-3">
        <div className={`blogCardI card ${this.props.classes}`} 
        style= {{backgroundImage: "url('https://images.unsplash.com/photo-1501459522532-9f67219c9c7a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=05229cd72d15db7a2a07c1b5ab893897&auto=format&fit=crop&w=400&q=80')"}}>
          <div className="card-header">
            <div className="row">
              <div className="col-md-9">
               <span className="tags">Featured</span>
               <span className="tags">Featured</span>
              </div>
              <div className="col-md-3 justify-content-end info-right">
                <span className="mr-2">12</span>
                <span>4</span>
              </div>
            </div>
          </div>
          <div className="card-body">
           <Link to="/ViewBlog"><h2 className="card-title">Special title treatment</h2>
           <p className="card-text">With supporting</p></Link>
          </div>
        </div>
      </div>
      )
  }
}

export default BlogCardI;
