import React from 'react';
import './recommendations.scss';

class Recommendations extends React.Component {
  render() {
    return (
          <div className="col-md-12 col-sm-12 col-12 mt-3 experience">
            <h4 className="mt-3 border-bottom pb-1">Recommendations</h4>
            {[1,2].map(item => (
              <div className="card mb-1">
                <div className="card-body">
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
                  <h5 className="mb-2">By-Name</h5>
                  <h6 className="mb-2 text-muted">2017-2018</h6>
                </div>
              </div>
            ))
          }
          </div>
      )
  }
}

export default Recommendations;
