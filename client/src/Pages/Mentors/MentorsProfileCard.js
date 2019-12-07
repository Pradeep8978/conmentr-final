import React from 'react';
import { connect } from 'react-redux';
import '../NewHome/newHome.css';
// import Header from '../NewHome/Header';
// import SideBar from '../NewHome/NavBarButton';

class MentorProfileCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        console.log(" . / . / . / . / . / PresentMentor in mentor profile card:  ", this.props);

        let MentorData = this.props.PresentMentor;

        return (
            <div className="col-sm-4 float-left p-0 m-0">
                <div className="single_MentorProfile width_100 float-left">
                    <div className="single_MentorProfile_bio width_100 float-left">
                        <span className="single_MentorProfile_img float-left">
                            <img alt="" src="./images/mentorProfile.png" />
                        </span>
                        <span className="single_MentorProfile_info float-left">
                            <div className="single_MentorProfile_name">
                                {MentorData.name}
                                </div>
                            <div className="single_MentorProfile_designation">
                            {MentorData.designation}
                                </div>
                        </span>
                    </div>

                    <div className="single_MentorProfile_single_info width_100 float-left">
                        <span className="single_MentorProfile_info_tilte float-left">
                            Company
                            </span>
                        <span className="single_MentorProfile_info_desc float-left">
                        {MentorData.organization}
                            </span>
                    </div>

                    <div className="single_MentorProfile_single_info width_100 float-left">
                        <span className="single_MentorProfile_info_tilte float-left">
                            Skills
                                </span>
                        <span className="single_MentorProfile_info_desc float-left">
                        {MentorData.languages}
                                </span>
                    </div>

                    <div className="single_MentorProfile_single_info width_100 float-left">
                        <span className="single_MentorProfile_info_tilte float-left">
                            Location
                                </span>
                        <span className="single_MentorProfile_info_desc float-left">
                        {MentorData.location}
                                </span>
                    </div>

                    <div className="single_MentorProfile_network_block width_100 float-left">
                        <div className="single_MentorProfile_network">
                            <button className="btn">Network</button>
                        </div>
                        <div className="single_MentorProfile_network_row">
                            <span className="single_MentorProfile_network_title_field">
                                Followers
                                </span>
                            <span className="single_MentorProfile_network_title_field">
                                234
                                </span>
                        </div>
                        <div className="single_MentorProfile_network_row">
                            <span className="single_MentorProfile_network_title_field">
                                Followers
                                </span>
                            <span className="single_MentorProfile_network_title_field">
                                234
                                </span>
                        </div>

                        <div className="single_MentorProfile_network_row">
                            <span className="single_MentorProfile_network_title_field">
                                Credits Secured
                                    </span>
                            <span className="single_MentorProfile_network_title_field">
                                1030
                                    </span>
                        </div>
                    </div>
                    <div className="single_MentorProfile_gen_invoice width_100 float-left">
                        <button className="btn btn-black">Generate Invoice</button>
                    </div>
                    <span className="single_MentorProfile_edit">
                        <img alt="" src="./images/pencil.png" width="15" />
                    </span>
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

export default connect(mapStateToProps, {

})(MentorProfileCard);
