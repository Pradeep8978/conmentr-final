import React from 'react';
// import Navbar from '../../Components/Common/Navbar/Navbar.js';
// import ProfileHeader from './../../Components/Profile/ProfileHeader/ProfileHeader.js';
// import Schedule from './../../Components/Profile/Schedule/Schedule.js';
// import PostInfo from './../../Components/Profile/PostInfo/PostInfo.js';
// import Experience from './../../Components/Profile/Experience/Experience.js';
// // import Recommendations from './../../Components/Profile/Recommendations/Recommendations.js';
// import CourseList from './../../Components/Profile/CourseList/CourseList.js';
// import Footer from '../../Components/Common/Footer/Footer.js'

import './profilePage.css';


class ProfilePage extends React.Component {
  render() {
    return (
      
      <div>
        

      {/* header */}
        <div id="section" className="contianer-fluid ">
        <a className="navbar-brand" href="" >
						<img className="landing-logo" src alt="" />
					</a>
       
         
          <a href="" className="btn btn float-right m-2 text-white"><i className="fa fa-globe"></i>ENGLISH </a>
          <a href="" className="btn btn float-right m-2 text-white"> <i className="fa fa-question-circle-o"></i>HELP&SUPPORT</a>
          <button className=" btn  btn float-right m-2 text-white "type="button" ><i className="fa fa-bell"></i>Notifications <span className="badge badge-light">4</span></button>
          
          <div className="btn-group  col-md-12 mt-3" role="group" aria-label="Basic example">
            <button type="button" className=" btn btn-outline-light ">COURSES</button>
            <button type="button" className="btn btn-outline-light ">INTERNATIONAL</button>
            <button type="button" className="btn btn-outline-light ">COLLABORATION</button>
            <button type="button" className="btn btn-outline-light ">HERE FOR GOOD</button>
            <button type="button" className="btn btn text-info bg-light">
              <i className="fa fa-grav  " ></i>MY PASSPORT</button>
            <button type="button" className="btn btn-indigo bg-light text-info"><i className="fa fa-star  " ></i>MY GOALS</button>
            <button type="button" className="btn btn-indigo bg-light text-info"><i className="fa fa-share-alt " ></i>MY CONNECTIONS</button>
          </div>
          {/* Header container-1 */}
          <div className="container mt-5">
            <section >
              <div className="row pr-lg-5">
                {/* column-1 */}
                <div className="col-sm-6 d-flex ">
                  <span> 
                  <img src="https://pennwriters.org/wp-content/uploads/2014/05/bill-gates-wealthiest-person.jpg" className="rounded-circle ml-5" width="150px" alt=""></img>
                  </span>
                
                  <div>
                    <h2 className="text-white mt-5 mb-3 ml-3 ">Welcome, Nick! </h2>
                    <p className="text-white   ml-3">What is your main focus for todey?</p>
                  </div>
              
              </div>
              </div>
            </section>
          </div>
          {/* Head container-1 */}

          {/* Head container-2 */}
          <div className="container mt-5  mb-5 pt-5">
              <div className="row">
                {/* Head column-1 */}
                <div className="col-lg-4 col-md-6 mb-lg-0 mb-4">
                  <h4 className="text-white">YOUR CURRENT ACTIVITY</h4>
                  <div className="card">
                    <div className="card-body">
                      <p className="text-secondary"><i className="fa fa-star"></i>ONLINE COURSE</p>
                      <h3 className=" font-weight-bold  text-dark">IDENTITY IN A GLOBAL<br/> SOCIETY</h3>
                      <br/>
                      <p className="text-info float-left">AUGUST 1,2015</p>
                      <p className="text-info float-right">OCTOBER 1,2015</p><br/>
                      <div className="progress mt-4" >
                        <div className="progress-bar col-md-6 " ></div>
                      </div><br/>
                      <div className="text-center">
                      <a href="" className="btn btn-alert alert-danger btn-outline-primary" >GO TO className ></a>
                    </div>
                    </div>
                  </div>
                </div>
                {/* Head column-2 */}
                <div className="col-lg-4 col-md-6 mb-lg-0 mb-4  ">
                  <div className="subcribe">
                  <button type="button" className="btn btn-outline-warning font weight-bold  "><h3>Subcribe</h3></button> <br/><br/>
                    </div>
                    <div className="card">
                      <div className="card-body">
                        <p className="text-secondary"><i className="fa fa-star"></i>ONLINE COURSE</p>
                        <h3 className="font-weight-bold text-dark ">FUNDAMENTALS OF PHOTOGRAPHIC ARTS</h3>
                        <div><br/>
                        <p className="text-info float-left">AUGUST 1, 2015</p>
                        <p className=" text-info float-right">OCTOBER 1, 2015</p>
                        </div>
                        <div className="progress mt-5">
                          <div className="progress-bar col-md-6"></div>
                        </div><br />
                        <div className="text-center">
                        <a className="btn btn-primary  btn-outline-white btn-alert alert-danger ">GO TO className ></a>
                      </div>
                      </div>
                    </div>
</div>
                    {/* Head column-3 */}
                    <div className="col-lg-4 col-md-6 mb-lg-0 mb-4">
                      <h3 className="  text-white text-center">YOUR GOALS</h3>
                      <div className="card">
                        <img src="https://5.imimg.com/data5/FP/QD/IU/SELLER-51896438/study-abroad-services-500x500.jpg"  width="100%" height="145px" alt=""/>
                      
  
                        
                      </div>
                   <div className="card">
                     <img src="https://www.tertiarycourses.com.sg/media/wysiwyg/skillsfuture-courses-singapore.jpg" width="100%" height="146px" alt=""/>
                        
        
                      </div>
                    </div>
</div>
              </div>
              {/* Head container-2 */}
</div>
          {/* header */}

          {/* section-1 container-2  */}
          <div className="bg-alert alert-secondary ">
            <div className="container ">
                <h4 className="text-center  text-danger">Brand new stuff crafted exclusively for you</h4>
                {/* section row-1 */}
                <div className="row">
                  {/* section column-1 */}
                  <div className="col-lg-4 col-md-12">
                    <div className="card card-cascade wider mt-5 ">
                      <div className="view view-cascade overlay">
                        <img src="https://miro.medium.com/max/3960/0*HICLyAdNSIyT0ODU.jpg" className="card-img-top" alt="wider" />
                        <a href="#!">
                          <div className="mask rgba-white-slight"></div>
                        </a>
                      </div>
                      <div className="card-body card-body-cascade text-center">
                        <h4 className=" text-primary text-center">ONLINE COURSE</h4>
                        <p className="text-center">IDST 1050C</p>
                        <h3 className=" text-left text-primary">/IDENTITY IN A GLOBAL SOCIETY</h3>
                        <p className="card-text">The aim of this course is to sensitize students to the role of a global society in the development of identity</p>
                      </div>
                    </div>
                  </div>
 {/* section-1 column-2 */}
                  <div className="col-lg-4 col-md-12">
                    <div className="card card-cascade narrower mt-5">
                      <div className="view view-cascade overlay">
                        <img src="https://www.orasoftnepal.com/sliderfiles/ll/slider1.jpg" width="500px" height="430px" className="card-img-top" alt="narrower" />
                        <a>
                          <div className="mask rgba-white-slight"></div>
                        </a>
                      </div>
                      <div className="card-img-overlay">
                        <div className="card-body card-body-cascade">
                          <h4 className="pink-text text-danger">EXCLUSIVE</h4>
                          <h6 className="card-text text-danger ">EVENT</h6><br/>
                          <h5 className="text-white">SEPT</h5>
                          <h6 className="text-white">28</h6>
                          <br/><br/><br/>
                          <h3 className=" text-danger mt-5  ">CLINTON GLOBAL INITIATIVE</h3>
                          <h4 className=" text-danger  ">NEW YORK CITY</h4>
                        </div>
                      </div>
                    </div>
                  </div>
{/* section-1 column-3 */}
                  <div className="col-lg-4 col-md-12">
                    <div className="card card-cascade mt-5 mb-5">
                      <div className="view view-cascade overlay">
                        <img src="https://blog.internshala.com/wp-content/uploads/2018/02/how-to-become-an-android-developer-672x336.jpg" height="190px" className="card-img-top" alt="normal" />
                        <a>
                          <div className="mask rgba-white-slight"></div>
                        </a>
                      </div>
                      <div className="card-body card-body-cascade text-center">
                        <div clasName="section card">
                        <h6>STUDY</h6>
                        <p className="text-center ">ABROAD PROGRAM</p>
                        <h5 >INTERNATIONAL BUSINESS ON BRAZIL</h5>
                        <p>Through  practical and theorical clases as well as technical vists, students will learn about International Business focused in Brazil,Innovation and Creativity , Marketing , Leadership and Brazilian market/investment</p>
                      </div>
                      </div>
                    </div>
                  </div>
                </div>

                
             {/* section-1 row-2 */}
                <div className="row">
                  {/*  section-1 column-a */}
                  <div className="col-lg-4 col-md-12 ">
                    <div className="card card-cascade wider mt-5 mb-5 ">
                      <div className="view view-cascade overlay">
                        <div className="course">
                        <img src="https://atgbcentral.com/data/out/116/4960661-design-pictures.jpg" height="430px" className="card-img-top" alt="wider" />
                        </div>
                        <a href="#!">
                          <div className="mask rgba-white-slight"></div>
                        </a>
                      </div>
                      <div className="card-img-overlay">
                        <div className="card-body card-body-cascade text-center">
                          <h5 className="card-title text-danger mt-3">ONLINE</h5>
                          <h5 className="card-title text-danger">COURSE</h5>
                          <p className="card-text text-primary text-center"><b> course provided by Les Roches</b></p>
                          <h1 className="card-title mt-5 bg-white text-primary">DESIGN THINKING</h1><br/>
                          <p className="text-white mt-5 mb-1">Through collaboration, teamwork,and creativity,they investigate user needs and desires on the way to developing human centered products and/or services</p>
                        </div>
                      </div>
                    </div>
                    </div>

                    {/* section-1 column-b */}
                    <div className="col-lg-4 col-md-6">
                      <div className="card card-cascade narrower mt-5">
                        <div className="view view-cascade overlay">
                          <img src="https://mindorks.files.wordpress.com/2018/01/b2d70-16c68azkwt-ptytv3reda8g.png" width="400px" height="190px" className="card-img-top" alt="narrower" />
                          <a>
                            <div className="mask rgba-white-slight"></div>
                          </a>
                        </div>
                        <div className="card-body card-body-cascade">
                          <h3 className="  text-primary">HERE FOR GOOD</h3>
                          <p className="text-secondary">CHALLENGES</p>
                          <h5 className="text-secondary">DECEMBER 16</h5>
                          <h3 className="text-primary">APPS FOR CHARITY</h3>
                          <p className="text-secondary">A global challenge to create a platform for peer-to-peer social donations.</p>
                        </div>
                      </div>
                    </div>
                    
                     {/*section-1 column-c */}
                    <div className="col-lg-4 col-md-6">
                      <div className="card card-cascade mt-5">
                        <div className="view view-cascade overlay">
                          <img src="https://www.developeronrent.com/newcss/images/SVG/hire-android-developer.png" height="190px" className="card-img-top" alt="normal" />
                          <a>
                            <div className="mask rgba-white-slight"></div>
                          </a>
                        </div>
                        <div id="jobs">
                        <div className="card-body card-body-cascade text-center">
                          <h5 >JOBS</h5>
                          <p className=" text-primary t-right">OPPORTUNITIES</p>
                          <p className=" text-primary text-left">SAN FRANCISCO,CA</p>
                          <h1 className="card-title ">WEB DEVELOER</h1>
                          <p className="text-primary">Responsible for working with the creative group to develop designs and concepts for websites.</p>
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
                
                
  export default ProfilePage;
