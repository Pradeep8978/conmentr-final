import React from 'react';
import './experience.scss';

class Experience extends React.Component {
  render() {
    return (
          <div className="col-md-12 col-sm-12 col-12 experience">
            <div className="row">
              <h4 className="pb-1">Experience</h4>
              {[1,2].map(item => (
                <div className="card mb-1">
                  <div className="card-body">
                    <h5 className="card-title">Title</h5>
                    <h5 className="card-subtitle mb-2">Company Name</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
                    <h6 className="card-subtitle mb-2 text-muted">2017-2018</h6>
                  </div>
                </div>
              ))
            }
            </div>
          </div>
      )
  }
}

export default Experience;
