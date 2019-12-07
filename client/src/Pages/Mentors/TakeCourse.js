import React from 'react';
import { connect } from 'react-redux';
import '../NewHome/newHome.css';
import Header from '../NewHome/Header';
import SideBar from '../NewHome/NavBarButton';

import MentorProfileCard from './MentorsProfileCard';

let onlinecourse = require("../../assets/images/online-course.png")

class TakeCourse extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

            open_Add_Course_PopUp: false,
            statusPopupCourse: false,
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
        this.courseDescriptionPopup = this.courseDescriptionPopup.bind(this)
    }

    courseDescriptionPopup() {

        const classAttached = this.state.openCoursePopup ? "mentor_popup_course_popup_container_block mentor_popup_course_popup_active" : "mentor_popup_course_popup_container_block"

        if (this.state.openCoursePopup) {
            return <div className={classAttached}>
                <div className="mentor_popup_course_popup_container">
                    <div className="mentor_course_popup_close">
                        <span onClick={() => this.handleClickCourseDisplay(this.state.openCoursePopup)}>
                            <i class="fa fa-times" aria-hidden="true"></i>
                        </span>
                    </div>
                    <div className="mentor_course_popup_inr_block">
                        <h3 className="mentor_course_popup_title text-left">
                            Title of the project
                    </h3>
                        <h4 className="mentor_course_popup_project_title text-left">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </h4>
                        <div className="mentor_course_popup_edu_meta_block text-left">
                            <div className="col-sm-6 h4 float-left mentor_course_popup_meta_half text-left p-0">
                                <h4>(Education Industry)</h4>
                                <div className="mentor_course_popup_meta_course_for h4 text-left">
                                    <ul>
                                        <li>
                                            <span>
                                                Web Development
                                        </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-sm-6 float-left mentor_course_popup_meta_half text-left">
                                <h4>Attachments</h4>
                                <div className="mentor_course_popup_meta_files_list text-left h5">
                                    <ul>
                                        <li>
                                            <span className="mentor_course_meta_file_icon text-left">
                                                <i class="fa fa-paperclip" aria-hidden="true"></i>
                                            </span>
                                            <span className="mentor_course_meta_file_name text-left">
                                                Edu Ops Python Importer
                                        </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="cols-sm-12 float-left">
                            <div className="mentor_course_popup_desc">
                                <h4>Description</h4>
                                <div className="mentor_course_popup_desc_inr">
                                    <p>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                    </p>
                                    <ul>
                                        <li>
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                        </li>
                                        <li>
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                        </li>
                                        <li>
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                            <ul>
                                                <li>
                                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                                </li>
                                                <li>
                                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                                </li>
                                                <li>
                                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-sm-12 m-0 p-0 mentor_course_popup_project_meta">
                                    <div className="col-sm-6 float-left" style={{ borderRight: '6px solid #3a3a3a' }}>
                                        <div className="mentor_course_popup_about_client">
                                            <h3>About Client</h3>
                                            <div className="mentor_course_popup_list">
                                                <ul>
                                                    <li>
                                                        Location
                                                </li>
                                                    <li>
                                                        Vijayawada
                                                </li>
                                                </ul>
                                            </div>

                                            <h3>Skill Requirement</h3>
                                            <div className="mentor_course_popup_skills_list">
                                                <ul>
                                                    <li>
                                                        Python
                                                </li>
                                                    <li>
                                                        DataScience
                                                </li>
                                                    <li>
                                                        Djongo
                                                </li>
                                                    <li>
                                                        MongoDB
                                                </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-sm-6 float-right">
                                        <div className="mentor_course_popup_about_client">
                                            <h3>Project Length</h3>
                                            <div className="col-sm-12 float-left mb-4">
                                                1-3 Months
                                        </div>
                                            <div className="col-sm-12 float-left">
                                                <h3>Entry Level</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mentor_course_popup_feedBack">
                                    <h3>Client History FeedBack</h3>
                                    <div className="col-sm-12 float-left">
                                        <div className="col-sm-6 float-left">
                                            Surya Vamsi
                                    </div>
                                        <div className="col-sm-6 float-left">
                                            <span>
                                                <i class="fa fa-star" aria-hidden="true"></i>
                                            </span>
                                            <span>
                                                <i class="fa fa-star" aria-hidden="true"></i>
                                            </span>
                                            <span>
                                                <i class="fa fa-star" aria-hidden="true"></i>
                                            </span>
                                            <span>
                                                <i class="fa fa-star-o" aria-hidden="true"></i>
                                            </span>
                                            <span>
                                                <i class="fa fa-star-o" aria-hidden="true"></i>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 float-left mt-3">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        } else {
            return null
        }
    }

    handleClickCourseDisplay(statusPopupCourse) {

        this.setState({
            openCoursePopup: !statusPopupCourse
        })
    }

    AddCourse_PopUp() {

        if (this.state.open_Add_Course_PopUp) {

            return <div className="add_course_popup_download_main">
                <div className="add_course_popup_download_drop_cap"></div>
                <div className="add_course_popup_download_inr">
                    <div className="add_course_popup_download_center">
                        <div className="add_course_popup_download_title_main">
                            <div className="add_course_popup_download_title">
                                <span className="add_course_popup_icon"><img alt="" src={onlinecourse} /></span><span>Add Course</span></div>
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
                        <button className="btn btn_golive" onClick={() => this.handleClickCourseDisplay(this.state.openCoursePopup)}>
                            Take Course
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

        let PresentMentor = {
            name: "mentor 1", languages: " Python, DataScience, Machine Learning , AWS services",
            organization: "Facebook", designation: "AI Scientist", cost: "6",
            skillsRanking: 200,
            reputation: 346, location: "Hyderabad",
            about: " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
        }

        return (
            <div className="main">
                <Header />
                <div className="container-fluid p-0">
                    <SideBar />
                    <div className="body_right float-right">
                        <MentorProfileCard PresentMentor={PresentMentor} />
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
                {this.courseDescriptionPopup()}

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

export default connect(mapStateToProps)(TakeCourse);
