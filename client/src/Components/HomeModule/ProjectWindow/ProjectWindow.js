import React from 'react';
import './projectWindow.scss';

class ProjectWindow extends React.Component {
  render() {
    return (
        <div className={"projectWindow col-md-12 col-sm-12 col-12 collapse "+this.props.classes} id="proj-details">
            <div className="card-body">
              <div className="container-fluid">
                <div className="row">
                  <a href="#proj-details" data-toggle="collapse" role="button" aria-expanded="false" aria-controls="proj-details" className="btn btn-close ml-auto">X</a>
                </div>
                <div className="row">
                  <div className="col-md-12 col-sm-12 col-xs-12">
                    <h4>{this.props.title}</h4>
                    <h5>{this.props.techStack}</h5>
                    <div className="mt-4">
                      <span className="tags">{this.props.domain}</span>
                    </div>
                    <div className="mt-4">
                      <h5>Description:</h5>
                      <p>{this.props.description}</p>
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </div>
      )
  }
}

export default ProjectWindow;
