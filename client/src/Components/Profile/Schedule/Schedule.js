import React from 'react';
import './schedule.scss';

class Schedule extends React.Component {
  render() {
    return (
      <div className="schedule bg-white">
        <div className="form-group form-check">
          <input type="date" className="" id="date" />
          <label className="" htmlFor="date">Select Date</label>
        </div>
      </div>
      )
  }
}

export default Schedule;
