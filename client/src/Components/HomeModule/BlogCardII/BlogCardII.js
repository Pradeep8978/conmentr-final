import React from 'react';
import './blogCardII.scss';

class BlogCardII extends React.Component {
  render() {
    return (
        <div className={"blogCardII card col-md-3 col-sm-3 col-12 mb-3 "+this.props.classes}>
          <div className="card-body">
            <h5 className="card-title">Special title treatment title treatment?</h5>
            <p className="card-text text-muted">With supporting text below as a natural lead-in to additional content  natural lead-in to additional content.</p>
          </div>
          <div className="card-footer">
            <a href="/" className="float-right">Read more</a>
          </div>
        </div>
      )
  }
}

export default BlogCardII;
