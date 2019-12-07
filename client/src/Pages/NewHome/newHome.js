
import React from 'react';
import { connect } from 'react-redux';
import './Mentor.scss';
// import user1 from "../../assets/images/user1.jpg";
import Google from "../../assets/images/Google.png";
import Header from './Header';
import NavBarButton from './NavBarButton';
import MentorFilter from './MentorFilter';
import VerticalNav from './VerticalNav';
import SelectedMentor from './SelectedMentor';
import Axios from 'axios';

//filter format

// const filterMock = {
//   jobType: ['Hourly'],
//   experienceLevel: [],
//   projectPeriod: ['Less than a week']
// }

class NewHome extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      mentorsList: [],
      filteredMentors: [],
      selectedMentor: null,
      filters: {}
    }
  }
  
 componentDidMount = ()=>{
  Axios.get('/users/list')
  .then(res => {
      console.log("useers list",res.data)
      const mentorsList = res.data;
      this.setState({mentorsList, filteredMentors:mentorsList})
    })
 }

  onChangeFilter = (item, subItem) => {
    const { filters } = this.state;
    if (filters[item.value] && filters[item.value].includes(subItem.label)) {
      filters[item.value] = filters[item.value].filter(o => o !== subItem.label);
      if(!filters[item.value].length) delete filters[item.value];
    } else {
      if (!filters[item.value]) filters[item.value] = [];
      filters[item.value].push(subItem.label);
    }
    console.log('FILTERS =>', filters);
    this.setState({ filters }, () => {
      this.applyFilters()
    });
  }

  applyFilters = () => {
    const { mentorsList, filters } = this.state;
    const filterTypes = Object.keys(filters);
    const filteredMentors = mentorsList.filter(item => {
      let valid = true;
      filterTypes.forEach(key => {
        if (!filters[key].includes(item[key])) {
          valid = false;
        // }else if(filters[key].length === 0){
        //   valid = true;
        }
      });
      return valid;
    });
    const filteredIds = filteredMentors.map(o => o.id);
    const selectedMentor =  this.state.selectedMentor && 
                              filteredIds.includes(this.state.selectedMentor.id) ? 
                              this.state.selectedMentor : null;
    this.setState({ filteredMentors, selectedMentor });
  }

 

  ReturnMentors() {
    console.log('mentorssssss ===>', this.props)

    return this.state.filteredMentors.map((mentor, idx) =>
      <div className="col-sm-12 col-md-12 col-xs-12 float-left m-0 p-0"
        key={idx} onClick={() => {
          console.log(" click on  mentor ", mentor);
          this.setState({ selectedMentor: mentor })
        }}  >
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-xs-12 col-md-12">
              <div className="card">
                <div className="row">
                  <div className="col-sm-1 col-md-1 col-xs-1">
                    <img src={mentor.pictureUrl} alt="user1" className="user1" />
                  </div>
                  <div className="col-sm-10 col-xs-10 col-md-10">
                    <div className="row">
                      <div className="col-sm-12 col-xs-12 col-md-12">
                        <div className="mentor_text1">
                          <div className="row">
                            <div className="col-sm-4 col-xs-4 col-md-4">
                              <div className="row">
                                <div className="col-sm-12 col-xs-12 col-md-12">
                                  <span><b>{mentor.name}</b></span><i className="fa fa-star"></i>
                                </div>
                              </div>
                              <div className="row mentor_text">
                                <div className="col-sm-12 col-xs-12 col-md-12">
                                  <span><b>{mentor.designation}</b> <img src={Google} alt="Google" className="Google" /></span>
                                </div>
                              </div>
                            </div>
                            <div className="col-sm-1"></div>
                            <div className="col-sm-7 col-xs-7 col-md-7 mentor_text2">
                              <div className="row">
                                <div className="col-sm-12 col-xs-12 col-md-12">
                                  <b>Skills :</b>
                                </div>
                              </div>
                              <div className="row mentor_text">
                                <div className="col-sm-9 col-xs-9 col-md-9">
                                  <b>{mentor.languages}</b>
                                </div>
                                <div className="col-sm-3 col-xs-3 col-md-3">
                                  <b>{mentor.cost}$/minute</b>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-sm-12 col-xs-12 col-md-12">
                              <div className="row mentor_text">
                                <div className="col-sm-12 col-xs-12 col-md-12">
                                  <b>About Mentor :</b>
                                </div>
                              </div>
                              <div className="row mentor_text">
                                <div className="col-sm-9 col-xs-9 col-md-9">
                                  {mentor.about}
                                </div>
                                <div className="col-sm-3 col-xs-3 col-md-3">
                            <button className="btn Request"
                                onClick={() => {
                                    this.props.history.push('/Mentors', mentor = { mentor })
                                }}
                            >
                                <b>Request Mentorship</b>
                                </button>
                        </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    )
  }
  render() {
    const {selectedMentor} = this.state;
    console.log("mentorList", this.state.mentorsList)
    return (
      <div className="mentorMain">
        <div className="row" >
          <Header />
        </div>
        <div className="row body_section" >
          <div className="col-md-3 col-sm-3 col-xs-3">
            <div className="row">
              <div className="col-sm-3 col-md-3 col-xs-3">
                <VerticalNav/>
              </div>
              <div className="col-sm-1 col-md-1 col-xs-1"></div>
              <div className="col-sm-6 col-md-6 col-xs-6">
                <MentorFilter onChangeFilter={this.onChangeFilter} />
              </div>
            </div>

          </div>
          <div className="col-md-9 col-sm-9 col-xs-9">
            <div className="row">
              <div className="col-sm-12 col-md-12 col-xs-12"><NavBarButton /></div>
            </div>
            <div className="row">
              <div className="col-md-8 col-sm-8 col-xs-8">
                {this.ReturnMentors()}
              </div>
              <div className="col-md-2 col-sm-2 col-xs-2">
                {selectedMentor && <SelectedMentor selectedMentor={this.state.selectedMentor} />}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { items } = state.users;
  return {
    items
  };
}

export default connect(mapStateToProps)(NewHome);
