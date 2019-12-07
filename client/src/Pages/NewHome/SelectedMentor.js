
import React from 'react';
import { connect } from 'react-redux';
import './SelectedMentor.scss';
// import user1 from "../../assets/images/user1.jpg";
// import Header_Component from './Header';
// import MenuBar from './MenuBar';

class SelectedMentor extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentWillMount() {
        console.log(" SelectedMentor component will moint: ", this.props);
    }

    render() {
        console.log(" SelectedMentor render  ", this.props);
        let MentorDetails = this.props.selectedMentor;
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-1 col-md-1 col-xs-1"></div>
                    <div className="col-sm-8 col-md-8 col-xs-8">
                    <div className="selected">
                        <div className="card">
                    <div className="row">
                    <div className="col-sm-2 col-md-2 col-xs-2"></div>
                    <div className="col-sm-10 col-md-10 col-xs-10">
                       <div className="row">
                       <div className="col-sm-12 col-md-12 col-xs-12"> 
                       <div className="full_mentor_content">
                         <b>{MentorDetails.name}</b>
                        </div></div>
                        <div className="col-sm-12 col-md-12 col-xs-12"> 
                        <div className="full_mentor_content1">
                           <b>{MentorDetails.designation},  {MentorDetails.organization}</b>
                        </div>
                        </div>
                       </div>
                        <div className="row">
                        <div className="col-sm-12 col-md-12 col-xs-12"> 
                        <div className="full_mentor_content1">
                           <b>{MentorDetails.skillsRanking}</b>
                        </div>
                        </div>   
                        </div>
                        
                        <div className="row">
                        <div className="col-sm-12 col-md-12 col-xs-12"> 
                        <div className="full_mentor_content1">
                           <b>{MentorDetails.reputation}</b>
                        </div>
                        </div>   
                        </div>
                                         
                    </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-2 col-md-2 col-xs-2  ">
                            <div id="target">
                               <div className="target_text"><b>456</b></div>
                            </div>
                        </div>
                        <div className="col-sm-2 col-md-2 col-xs-2"></div>
                        <div className="col-sm-8 col-md-8 col-xs-8">
                            <div className="row lorum">
                                Lorum Ipsum
                            </div>
                            <hr></hr>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-2 col-md-2 col-xs-2">
                            <div id="target1">
                               <div className="target_text"><b>456</b></div>
                            </div>
                        </div>
                        <div className="col-sm-2 col-md-2 col-xs-2"></div>
                        <div className="col-sm-8 col-md-8 col-xs-8">
                        <div className="row lorum1">
                                Lorum Ipsum
                            </div>
                            <hr></hr>
                           
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-2 col-md-2 col-xs-2">
                            <div id="target2">
                               <div className="target_text"><b>456</b></div>
                            </div>
                        </div>
                        <div className="col-sm-2 col-md-2 col-xs-2"></div>
                        <div className="col-sm-8 col-md-8 col-xs-8">
                        <div className="row lorum2">
                                Lorum Ipsum
                            </div>
                            <hr></hr>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-2 col-md-2 col-xs-2">
                           
                        </div>
                       
                        <div className="col-sm-8 col-md-8 col-xs-8">
                        <div class="flex-wrapper">
  <div class="single-chart">
    <svg viewBox="0 0 36 36" class="circular-chart blue">
      <path class="circle-bg"
        d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
      />
      <path class="circle"
        stroke-dasharray="20, 100"
        d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
      />
      <text x="18" y="20.35" class="percentage">20%</text>
    </svg>
  </div>
</div>
                           
                        </div>
                        <div className="col-sm-2 col-md-2 col-xs-2"></div>
                    </div>
                    </div>
                </div>
                    </div>
                </div>
                
            </div>
            //     <div className="col-sm-2">
            //         <div className="card">
            //         <div className="col-sm-4 float-right pr-0">
            //      <div className="col-sm-11 float-left m-0 p-0">
            //          <div className="full_mentor_content_block">
            //              <div className="full_mentor_content_profile">
            //                  <div className="full_mentor_content_profile_img">
            //                      <img src="./images/mentorProfile.png" />
            //                 </div>
            //                  <div className="full_mentor_content_profile_name_designation">
            //                      <div className="full_mentor_content_profile_name">
            //                          {MentorDetails.name}
            //                      </div>
            //                      <div className="full_mentor_content_profile_designation">
            //                          {MentorDetails.designation},  {MentorDetails.organization}
            //                      </div>
            //                  </div>
            //                  <div className="full_mentor_content_profile_scoreBoard">
            //                      <div className="width_100 float-left full_mentor_content_profile_single_item">
            //                          <div className="full_mentor_content_profile_single_score float-left">
            //                              <span>
            //                                  {MentorDetails.skillsRanking}
            //                              </span>
            //                          </div>
            //                          <div className="full_mentor_content_profile_single_description">
            //                              <span>Lorem Ipsum</span>
            //                          </div>
            //                      </div>
            //                      <div className="width_100 float-left full_mentor_content_profile_single_item">
            //                          <div className="full_mentor_content_profile_single_score float-left">
            //                              <span>
            //                                  {MentorDetails.reputation}
            //                              </span>
            //                          </div>
            //                          <div className="full_mentor_content_profile_single_description">
            //                              <span>Lorem Ipsum</span>
            //                          </div>
            //                      </div>
            //                      <div className="width_100 float-left full_mentor_content_profile_single_item">
            //                          <div className="full_mentor_content_profile_single_score float-left">
            //                              <span>
            //                                  456
            //                                                  </span>
            //                          </div>
            //                          <div className="full_mentor_content_profile_single_description">
            //                              <span>Lorem Ipsum</span>
            //                          </div>
            //                      </div>
            //                      <div className="full_mentor_content_profile_single_graph">
            //                          <img src="./images/graph.png" />
            //                      </div>
            //                  </div>
            //             </div>
            //          </div>
            //     </div>
            //  </div>
            //         </div>
            //     </div>
           


        );
    }
}

function mapStateToProps(state) {
    const { items } = state.users;
    return {
        items
    };
}

export default connect(mapStateToProps)(SelectedMentor);
