

import React from 'react';
import { connect } from 'react-redux';
import '../NewHome/newHome.css';
import Header from '../NewHome/Header';
import NavBarButton from '../NewHome/NavBarButton.js';

import MentorProfileCard from './MentorsProfileCard';

let onlinecourse = require("../../assets/images/online-course.png")

class Mentors extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

            open_Add_Course_PopUp: false,

            CouseDetails: [{
                id: 1,
                name: "Aws Devops",
                duration: "40",
            }, {
                id: 2,
                name: "Node Js",
                duration: "20",
            },
            {
                id: 3,
                name: "React Native",
                duration: "70",
            },
            ],
            newCourseName: "",
            courseDuration: ""

        }
    }

    gotToCodeTerminal = () => {
        window.location.href = '/code-terminal';
    }


    AddCourse_PopUp() {

        if (this.state.open_Add_Course_PopUp) {

            return <div className="add_course_popup_download_main">
                <div className="add_course_popup_download_drop_cap"></div>
                <div className="add_course_popup_download_inr">
                    <div className="add_course_popup_download_center">
                        <div className="add_course_popup_download_title_main">
                            <div className="add_course_popup_download_title"><span className="add_course_popup_icon">
                                <img alt="online_course" src={onlinecourse} /></span><span>Add Course</span></div>
                        </div>
                        <div className="add_course_popup_download_body">
                            <div className="add_course_popup_download_body_inr">
                                <div className="add_course_popup_download_body_inr_main">
                                    <div className="add_course_popup_download_body_description">Lorem Ipsum is simply dummy text of the printing and typesetting industry:</div>
                                    <div className="add_course_popup_download_body_form">
                                        <div className="add_course_popup_download_body_form_single">
                                            <div className="add_course_popup_download_body_form_single_label">Course Name:</div>
                                            <div className="add_course_popup_download_body_form_single_field">
                                                <input type="text"
                                                    className="add_course_popup_select_school"
                                                    placeholder="Course Name"
                                                    value={this.state.newCourseName}
                                                    onChange={(txt) => {
                                                        console.log("  course name txt txt: ", txt.target.value);
                                                        this.setState({ newCourseName: txt.target.value });
                                                    }}

                                                />
                                            </div>
                                        </div>
                                        <div className="add_course_popup_download_body_form_single">
                                            <div className="add_course_popup_download_body_form_single_label">Course Meta:</div>
                                            <div className="add_course_popup_download_body_form_single_field">
                                                <input type="text"
                                                    className="add_course_popup_select_school"
                                                    placeholder="Course Meta"
                                                    onChange={(txt) => {
                                                        console.log("  duration txt txt: ", txt);

                                                        this.setState({ courseDuration: txt.target.value });
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="add_course_popup_download_actions">
                                <div className="add_course_popup_download_cancel"
                                    onClick={() => this.setState({ open_Add_Course_PopUp: false })}
                                >Cancel</div>
                                <div className="add_course_popup_download_submit">
                                    <button className="add_course_popup_download_btn"
                                        onClick={() => {

                                            if (this.state.newCourseName !== "" && this.state.courseDuration !== "") {
                                                let CouseDetails = this.state.CouseDetails;
                                                let newCourse = {
                                                    id: CouseDetails.length + 1,
                                                    name: this.state.newCourseName,
                                                    duration: this.state.courseDuration
                                                }

                                                CouseDetails.push(newCourse)
                                                this.setState({ CouseDetails, open_Add_Course_PopUp: false })
                                            }
                                        }}
                                    >Add Course</button></div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        } else {
            return null;
        }

    }


    /**
     * @returns {JSX}
     * 
     */
    returnCourseList() {
        return this.state.CouseDetails.map(course => <div className="current_courses_single">
            <div className="current_courses_single_info">
                <div className="current_courses_single_image">
                    <img alt="" src="./images/course-card.png" />
                </div>
                <div className="current_courses_single_Data">
                    <div className="current_courses_single_title">
                        {course.name}
                    </div>
                    <div className="current_courses_single_duration">
                        Duration  {course.duration} Hours
        </div>
                    <div className="current_courses_single_golive">
                        <button className="btn btn_golive" onClick={()=>this.gotToCodeTerminal()}>
                            Go to Live
                        </button>
                    </div>
                </div>
            </div>
            <div className="current_courses_single_visibility">
                Visibility <i className="fa fa-toggle-on" aria-hidden="true"></i>
            </div>
        </div>)



    }

    render() {

        console.log(" . / . / .  / selected mentor is :  ", this.props);

        let PresentMentor = this.props.location.state.mentor;

        return (
            <div className="main">
                <Header />
                <div className="container p-0">
                    <NavBarButton />
                    <div className="body_right float-right">
                        < MentorProfileCard PresentMentor={PresentMentor} />
                        <div className="col-sm-8 float-right pr-0 m-0">
                            <div className="col-sm-12 float-left m-0 pb-4 single_MentorProfile_graph_main">
                                <img alt="" src="./images/graph_image.jpg" />
                            </div>
                            <div className="single_MentorProfile_content_blocks col-sm-12 m-0 p-0 float-left">
                                <ul>
                                    <li>
                                        <div className="single_MentorProfile_content_single">
                                            <div className="single_MentorProfile_content_count">
                                                76
                                    </div>
                                            <div className="single_MentorProfile_content_row">
                                                Views
                                    </div>
                                            <div className="single_MentorProfile_content_row">
                                                Last week
                                    </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="single_MentorProfile_content_single">
                                            <div className="single_MentorProfile_content_count">
                                                12
                                    </div>
                                            <div className="single_MentorProfile_content_row">
                                                 Requests
                                    </div>
                                            <div className="single_MentorProfile_content_row">
                                                Last week
                                    </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="single_MentorProfile_content_single">
                                            <div className="single_MentorProfile_content_count">
                                                9
                                    </div>
                                            <div className="single_MentorProfile_content_row">
                                                Followers
                                    </div>
                                            <div className="single_MentorProfile_content_row">
                                                Last week
                                    </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            <div className="col-sm-12 float-left mt-4 mb-4 p-0">
                                <div className="col-sm-6 float-left">
                                    <button className="btn btn_request_accept width_100">
                                        <span>Accept Requests</span>
                                        <span><i className="fa fa-check" aria-hidden="true"></i></span>
                                    </button>
                                </div>
                                <div className="col-sm-6 float-left">
                                    <button className="btn btn_add_course width_100"
                                        onClick={() => this.setState({ open_Add_Course_PopUp: true })}
                                    >
                                        <span>Add a Course </span>
                                        <span><i className="fa fa-plus-circle" aria-hidden="true"></i></span>
                                    </button>
                                </div>
                            </div>

                            <div className="col-sm-12 float-left m-0 p-0">
                                <div className="col-sm-12 float-left m-0 h5 mb-2 mt-4"
                                    style={{ margin: 10 }}
                                >
                                    Current Courses
                        </div>
                                <div className="col-sm-12 float-left m-0 p-0">
                                    <div className="current_courses_main_block">


                                        {this.returnCourseList()}


                                        {/* <div className="current_courses_single">
                                            <div className="current_courses_single_info">
                                                <div className="current_courses_single_image">
                                                    <img src="./images/course-card.png" />
                                                </div>
                                                <div className="current_courses_single_Data">
                                                    <div className="current_courses_single_title">
                                                        Devops Foundation
                                                </div>
                                                    <div className="current_courses_single_duration">
                                                        Duration  4 Hours
                                                </div>
                                                    <div className="current_courses_single_golive">
                                                        <button className="btn btn_golive">
                                                            Go to Live
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="current_courses_single_visibility">
                                                Visibility <i className="fa fa-toggle-on" aria-hidden="true"></i>
                                            </div>
                                        </div>

                                        <div className="current_courses_single">
                                            <div className="current_courses_single_info">
                                                <div className="current_courses_single_image">
                                                    <img src="./images/course-card.png" />
                                                </div>
                                                <div className="current_courses_single_Data">
                                                    <div className="current_courses_single_title">
                                                        Devops Foundation
                                                    </div>
                                                    <div className="current_courses_single_duration">
                                                        Duration  4 Hours
                                                    </div>
                                                    <div className="current_courses_single_golive">
                                                        <button className="btn btn_golive">
                                                            Go to Live
                                                            </button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="current_courses_single_visibility">
                                                Visibility <i className="fa fa-toggle-on" aria-hidden="true"></i>
                                            </div>
                                        </div>
                                        <div className="current_courses_single">
                                            <div className="current_courses_single_info">
                                                <div className="current_courses_single_image">
                                                    <img src="./images/course-card.png" />
                                                </div>
                                                <div className="current_courses_single_Data">
                                                    <div className="current_courses_single_title">
                                                        Devops Foundation
                                                </div>
                                                    <div className="current_courses_single_duration">
                                                        Duration  4 Hours
                                                </div>
                                                    <div className="current_courses_single_golive">
                                                        <button className="btn btn_golive">
                                                            Go to Live
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="current_courses_single_visibility">
                                                Visibility <i className="fa fa-toggle-on" aria-hidden="true"></i>
                                            </div>
                                        </div> */}

                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>


                {this.AddCourse_PopUp()}


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

export default connect(mapStateToProps)(Mentors);
