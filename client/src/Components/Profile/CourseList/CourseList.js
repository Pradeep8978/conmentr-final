import React from 'react';
import './courseList.scss';

class CourseList extends React.Component {
  render() {
    return (
          <div className={"col-md-12 col-sm-12 col-12 courseList "+ this.props.classes}>
            <div className="row">
              <div className="col-12 col-md-12 col-sm-12">
                <h4 className="pt-1">Courses</h4>
              </div>
                {[1,2,3].map(item => (
                  <div key={item} className="col-md-4 border-right col-sm-4 col-6 text-center p-3">
                    Course Name<br/>
                    <button className="btn btn-primary mt-2">Go</button>
                  </div>
                ))
              }
            </div>
          </div>
      )
  }
}

export default CourseList;
