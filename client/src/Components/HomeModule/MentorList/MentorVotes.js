import React from 'react';
import './mentorVotes.scss';

class MentorVotes extends React.Component {
  
  render() {
    return (
      <div className="row col-lg-12 col-sm-12 col-8 mentor-votes pull-left">
        <div className="votes-container col-lg-12">
            <div className="vote-count pull-left vote-count-abs bg-red">569</div>
            <div className="pull-left vote-type col-lg-10">Jobs</div>
        </div>
        <div className="votes-container col-lg-12">
            <div className="vote-count pull-left vote-count-abs bg-green">569</div>
            <div className="pull-left vote-type col-lg-10">Reputation </div>
        </div>
        <div className="votes-container col-lg-12">
            <div className="vote-count pull-left vote-count-abs bg-blue">569</div>
            <div className="pull-left vote-type col-lg-10">Votes to Mentor</div>
        </div>
      </div>
    );
  }
}

export default MentorVotes;