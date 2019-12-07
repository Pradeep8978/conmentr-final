import React from 'react';
import Navbar from '../../Components/Common/Navbar/Navbar.js';
// import ProfileHeader from './../../Components/Profile/MentorProfile/MentorProfile.js';
// import Schedule from './../../Components/Profile/Schedule/Schedule.js';
// import PostInfo from './../../Components/Profile/PostInfo/PostInfo.js';
// import Experience from './../../Components/Profile/Experience/Experience.js';
// import InfoCard from './../../Components/Profile/InfoCard/InfoCard.js';
import VerticalNav from '../NewHome/VerticalNav.js'
// import Recommendations from './../../Components/Profile/Recommendations/Recommendations.js';
// import CourseList from './../../Components/Profile/CourseList/CourseList.js';
// import Footer from '../../Components/Common/Footer/Footer.js'
import { connect } from 'react-redux';
// import { userActions } from '../../_actions';

class MentorProfilePage extends React.Component {

	render() {
		return (
			<div className="mentorProfile " >
				<div className="position">
					<Navbar />
				</div>
				<div className="col-md-3">
					<VerticalNav />
				</div>
				<div className="mentorpage">
					<div className="profilePage">
						<div className="">

							<img className="" src={require("./../../assets/images/mentor_coverimage.jpg")} alt="Cover Bg" />

							<div className="bsp_mleft">

								<div className="row bg_color col-centered">

									<div className="col-sm-4 align_center ">
										<div className="row magin_tp1">
											<div className="col-sm-4"><span className=" btn_d">440 FOLLOWERS</span></div>
											<div className="col-sm-4"><span className=" btn_d">440 FOLLOWINGS</span></div>
											<div className=""><span className="btn_f"><i className='fa fa-user-plus'></i>FOLLOW</span></div>
										</div>
									</div>

									<div className="col-sm-4 text-center margin_botm">
										<img className="dharmesh_img" src={require("./../../assets/images/ganesh.jpg")} alt="profile" />
										<h1 className="pro_title">GANESHREDDY KATLA</h1>
										<span className="categs">ADMIN</span>
										<span className="categs">SPEAKER</span>
										<span className="categs">CODEFISH</span>
										<h4 className="founder_title">Founder and Director at CODEFISH</h4>
										<span>Hyderabad</span>
										{/* <i className="material-icons">location_on</i> */}
									</div>

									<div className="col-sm-4 al_center magin_tp">
										<button href="bttn_link">
											<img className="icon_right" alt="" src={require("./../../assets/images/fb_icon.png")} />
										</button>
										{/* <a href="#"><img className="icon_right" src="img/linkdin_icon.png"/></a> */}
										<button href="bttn_link">
											<img className="icon_right" alt="" src={require("./../../assets/images/google_plus_icon.png")} />
										</button>
										{/* <a href="#"><img className="icon_right" src="img/instag_icon.png"/></a>
				<a href="#"><img className="icon_right" src="img/twitter_icon.png"/></a> */}
										<span className=" btn btn_message mt-4"><i class='fa fa-comments'></i>SEND MESSAGE</span>
									</div>

								</div>




								<h1 className="mcskills_title">MY COURSE SKILLS</h1>
								<div className="row bgcolor cours_mtop">

									<div className="col-sm-4 al_center ">
										<span><h4 className="ct_color">INBOUND MARKETING <i class="fa fa-star"></i></h4></span>
									</div>

									<div className="col-sm-4 al_center">
										<span><h4 className="course_title">ENTREPRENEURSHIP <i class="fa fa-star"></i></h4></span>
									</div>

									<div className="col-sm-4 al_center">
										<span><h4 className="course_title">GROWTH MARKETING <i class="fa fa-star"></i></h4></span>
									</div>

								</div>



								<h1 className="mcskills_title">PROFESSIONAL BIO</h1>
								<div className="row bgcolor cours_mtop">

									<div className="col-sm-7">
										<div className="dis_inl"><h4 className="car_staguy">CAREER STARTUP GUY</h4><p className="exper_parag">10 YEARS EXPERIANCE</p></div>
										<p className="parag_1">Author of the book "Inbound Marketing" (http://InboundBook.com)</p>
										<p className="parag_2">Fouder of HubSpot, a venture-backed software staetup. HubSpot offers the indus trys first inbound marketing system of small business. The software isavailableas a hosted service(Saas)</p>
									</div>

									{/* <!--h1>WHERE I WRITE</h1--> */}
									{/* <div class="col-sm-5">
				<img src="img/client_image.png" alt="inbound"/>
				<span class="publis_a"><i class="material-icons">check</i>published author</span>
				<span class="dis_flex"><h6 class="startups">ON STARTUPS</h6><hr class="line2"/>(personal blog)</span>
				<span class="dis_flex"><h6 class="startups">LINKED IN</h6><hr class="line2"/>(influencer blog)</span>
				<span class="dis_flex"><h6 class="startups">HUBSPOT</h6><hr align="center" class="line2"/>(company blog)</span>
			</div> */}

								</div>



								{/* <h1 class="mcskills_title">MY BADGES (28)</h1> */}


								{/* <div class="col-sm-2 al_center2">
				<img src="img/hubspot_image.png" alt="Hubspot"/>
				<p>HubSpot Power User</p>
			</div> */}

								{/* <div class="col-sm-2 al_center2">
				<img src="img/buffer_userimage.png" alt="Buffer User"/>
				<p>Buffer User</p>
			</div> */}

								{/* <div class="col-sm-2 al_center2">
				<img src="img/hubspot_cimage.png" alt="HubSpotC"/>
				<p>HubSpot Certification</p>
			</div> */}

								{/* <div class="col-sm-2 al_center2">
				<img src="img/smartm_image.png" alt="SmarterM"/>
				<p>Smarter Marketing</p>
			</div> */}

								{/* <div class="col-sm-2 al_center2">
				<img src="img/googleanalyas_image.png" alt="GoogleAC"/>
				<p>Google Analytics connected</p>
			</div> */}

								{/* <div class="col-sm-2 al_center2">
				<img src="img/googleanalyas_image.png" alt="GoogleAC"/>
				<p>Google Analytics connected</p>
			</div> */}

								{/* <div class="btncebter"><span class=" btn_viewbadges"><p class="viewall">VIEW ALL BADGES</p><i class="material-icons moreicon">expand_more</i></span></div> */}





								<h1 class="mcskills_title">TOOLS THAT I USE</h1>
								<div class="row bg_color cours_mtop">

									<div class="col-sm-1 al_center3">
										<img src={require("./../../assets/images/tools_image.png")} alt="Tools1" />
									</div>

									<div class="col-sm-1 al_center3">
										<img src={require("./../../assets/images/tools_image2.png")} alt="Tools2" />
									</div>

									<div class="col-sm-1 al_center3">
										<img src={require("./../../assets/images/tools_image3.png")} alt="Tools3" />
									</div>

									<div class="col-sm-1 al_center3">
										<img src={require("./../../assets/images/tools_image4.png")} alt="Tools4" />
									</div>

									<div class="col-sm-1 al_center3">
										<img src={require("./../../assets/images/tools_image5.png")} alt="Tools5" />
									</div>

									{/* <div class="col-sm-1 al_center3">
				<img src="img/tools_image5.png" src={require("./../../assets/images/recomendations.jpg")}  alt="Tools"/>
			</div>

			<div class="col-sm-1 al_center3">
				<img src="img/tools_image.png" src={require("./../../assets/images/recomendations.jpg")}  alt="Tools"/>
			</div>

			<div class="col-sm-1 al_center3">
				<img src="img/tools_image2.png" src={require("./../../assets/images/recomendations.jpg")}  alt="Tools"/>
			</div>

			<div class="col-sm-1 al_center3">
				<img src="img/tools_image3.png" src={require("./../../assets/images/recomendations.jpg")}  alt="Tools"/>
			</div>

			<div class="col-sm-1 al_center3">
				<img src="img/tools_image4.png" src={require("./../../assets/images/recomendations.jpg")}  alt="Tools"/>
			</div> */}

									{/* <div class="col-sm-1 al_center3">
				<img src="img/tools_image5.png" alt="Tools"/>
			</div>

			<div class="col-sm-1 al_center3">
				<img src="img/tools_image5.png" alt="Tools"/>
			</div> */}
								</div>



								<h1 class="mcskills_title">RECOMENDATIONS</h1>
								<div class="row bg_color cours_mtop">
									<div class="col-sm-5">
										<div class="row">
											<div class="col-sm-5">
												<img class="recomendations_img" src={require("./../../assets/images/ganesh.jpg")} alt="Recomendation" />
											</div>
											<div class="col-sm-7">
												{/* <!--div class="randf_dsinline"--> */}
												<h4 class="randf_title">Rand Fishkin</h4>
												<a class="wizard_mail" href="mailto:wizardofmoz@moz.com" target="_top">wizard of moz@moz.com</a>
												<h6 class="rand_date">September 11 2009</h6>
												<p class="dhr">Dharmesh helped Rand with</p>
												<h6 class="inbound_matitle">INBOUND MARKETING</h6>
												<li class="fa fa-star rating_star"></li><li class="fa fa-star rating_star"></li><li class="fa fa-star rating_star"></li>
												<div class="vl"></div>
												{/* <!--/div--> */}
											</div>
										</div>
									</div>

									<div class="col-sm-7">
										<p class="recomd_parag">Dharmesh's eloquence and charisma on stage is matched only by his command of the topics and audience empathy,When surveyed,our 200 attendees overwhelmingly gave Dharmesh's presentation the highest score available.Many said it was their favorite
				session of the event.I'll be makingsure that he's at any future seminars that we hold.</p>
									</div>

									{/* <button type="button" id="sell" class="viewmorerecomd_btn">VIEW MORE RECOMENDATIONS<i class="material-icons moreicon">expand_more</i></button>
			<div class="recomd_vm"> 
				<select class="form-control vmrecomedation" id="sell" name="sellist">
					<option>VIEW MORE RECOMEDATION</option>
					<option>ACTION</option>
					<option>ANOTHER ACTION</option>
					<option>SOMETHING ELSE HERE</option>
				</select>
			</div> */}
									<div class="btn-group">
										<button type="button" class="btn recomdbtn" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
											View Recommendations
  										</button>
										<div class="dropdown-menu">
											<button className="bttn_link dropdown-item" >Action</button>
											<button className="bttn_link dropdown-item">Another action</button>
											<button className="bttn_link dropdown-item">Something else here</button>
											<div class="dropdown-divider"></div>
											<button className="bttn_link dropdown-item">Separated link</button>
										</div>
									</div>
								</div>

								<h1 class="mcskills_title">DHARMESH TIMELINE</h1>
								<div class="row">
									<div class="col-sm-6">
										<button type="button" class="btn_profen1" >PROFESSIONAL LIFE</button>
									</div>
									<div class="col-sm-6">
										<button type="button" class="btn_profen1">INBOUND.ORG ACTIVITY</button>
									</div>
								</div>
								<div class="row cours_mtop">

									<div class="timeline">

										<div class="container cont_css left">
											<div class="content">
												<div class="row">
													<div class="col-sm-3">
														<img class="img-responsive" src={require("./../../assets/images/ganesh.jpg")} alt="Time line" />
													</div>
													<div class="col-sm-9">
														<h5 class="timel_stitle">Earned HubSpot Certification</h5>
														<p class="timel_parag">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe, eaque amet eius quia quod, aliquam aspernatur facilis.Minima quod corporis dignissimos.</p>
													</div>
												</div>
											</div>
											<p class="date_timel">2018-02-23</p>
										</div>

										<div class="container cont_css right">
											<div class="content">
												<div class="row">
													<div class="col-sm-3">
														<img class="img-responsive" src={require("./../../assets/images/ganesh.jpg")} alt="Time line" />
													</div>
													<div class="col-sm-9">
														<h5 class="timel_stitle">Earned HubSpot Certification</h5>
														<p class="timel_parag">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe, eaque amet eius quia quod, aliquam aspernatur facilis.Minima quod corporis dignissimos.</p>
													</div>
												</div>
											</div>
											<p class="date_timel">2018-02-23</p>
										</div>

										<div class="container cont_css left">
											<div class="content">
												<div class="row">
													<div class="col-sm-3">
														<img class="img-responsive" src={require("./../../assets/images/ganesh.jpg")} alt="Time line" />
													</div>
													<div class="col-sm-9">
														<h5 class="timel_stitle">Earned HubSpot Certification</h5>
														<p class="timel_parag">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe, eaque amet eius quia quod, aliquam aspernatur facilis.Minima quod corporis dignissimos.</p>
													</div>
												</div>
											</div>
											<p class="date_timel">2018-02-23</p>
										</div>

										<div class="container cont_css right">
											<div class="content">
												<div class="row">
													<div class="col-sm-3">
														<img class="img-responsive" src={require("./../../assets/images/ganesh.jpg")} alt="Time line" />
													</div>
													<div class="col-sm-9">
														<h5 class="timel_stitle">Earned HubSpot Certification</h5>
														<p class="timel_parag">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe, eaque amet eius quia quod, aliquam aspernatur facilis.Minima quod corporis dignissimos.</p>
													</div>
												</div>
											</div>
											<p class="date_timel">2018-02-23</p>
										</div>

									</div>

								</div>

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

export default connect(mapStateToProps)(MentorProfilePage);
