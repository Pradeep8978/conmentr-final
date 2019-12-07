import React from 'react';
import './sectionTabs.scss';

class SectionTabs extends React.Component {
  render() {
    return (
        <div className={"sectionTabs  "+this.props.classes}>
            <nav className="nav nav-pills nav-justified">
              <a className="nav-item nav-link active" data-toggle="pill" id="pills-mentors-tab" role="tab" aria-controls="mentors" href="#pills-mentors" aria-selected="true">Mentors</a>
              <a className="nav-item nav-link" data-toggle="pill" id="pills-blog-tab" role="tab" aria-controls="" href="#pills-blog" aria-selected="false">Blogs</a>
              <a className="nav-item nav-link" data-toggle="pill" id="pills-document-tab" role="tab" aria-controls="" href="#pills-document" aria-selected="false">Documents</a>
              <a className="nav-item nav-link" data-toggle="pill" id="pills-project-tab" role="tab" aria-controls="" href="#pills-project" aria-selected="false">Projects</a>
            </nav>
        </div>
      )
  }
}

export default SectionTabs;
