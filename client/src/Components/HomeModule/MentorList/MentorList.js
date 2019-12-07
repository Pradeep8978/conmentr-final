import React from 'react';
import WOW from "wowjs";
import './mentorList.scss';
import MentorCardFlat from './../MentorCardFlat/MentorCardFlat.js';


class MentorList extends React.Component {
  componentDidMount(){
    const wow = new WOW.WOW();
    wow.init();
  }
  render() {
    return (
      <div className="col-lg-10 col-sm-11 col-12 mentorWrap">
        {
          ( this.props.mentorList !== '') ? this.props.mentorList.map(items => (
            <div className="mentorList">
              <MentorCardFlat
                    classes=""
                    title={ items.title }
                    designation={ items.designation }
                    skills={ items.skills }
                    cardText={ items.abouttMentor }
                    buttonLink="#"
                    buttonText="Request Mentorship"
                    rate={ items.rate }
              />
            </div>
          )) : <h3 className="text-center">Sorry, no Mentor's for this range</h3>
        }
      </div>
    );
  }
}

export default MentorList;
