import React from 'react';
import './searchWindow.scss';

class SearchWindow extends React.Component {
  render() {
    return (
        <div className={"searchWindow col-md-12 col-sm-12 col-12 collapse "+this.props.classes} id="search">
            <div className="card-body">
              <div className="container-fluid">
                <div className="row">
                  <a href="#search" data-toggle="collapse" role="button" aria-expanded="false" aria-controls="proj-details" className="btn btn-close ml-auto">X</a>
                </div>
                <div className="row">
                  <div className="col-md-12 col-sm-12 col-xs-12">
                    <input type="text" className="search-text" placeholder="Search"/>
                  </div>
                </div>
              </div>
          </div>
        </div>
      )
  }
}

export default SearchWindow;
