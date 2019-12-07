import React from 'react';
import { Link } from 'react-router-dom';
import WOW from "wowjs";
import './home.scss';
// import Navbar from '../../Components/Common/Navbar/Navbar.js';
// import HeaderImage from './../../Components/Common/HeaderImage/HeaderImage.js';
// import TextCard from '../../Components/Common/TextCard/TextCard.js';
// import MentorCardHome from '../../Components/Common/MentorCard/MentorCardHome.js';
// import ProjectCard from '../../Components/Common/ProjectCard/ProjectCard.js';
import Footer from '../../Components/Common/Footer/Footer.js';
import { connect } from 'react-redux';
import { userActions } from '../../_actions';
import NavBar from '../Common/NavBar';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount(){
    const wow = new WOW.WOW();
    wow.init();
  }
  
  logOut() {
    this.props.dispatch(userActions.logout());
  }
  onChange(newValue) {
    console.log('change',newValue);
  }
  render() {
    // const { loggedIn } = this.props;
    return (
      <div>
        <NavBar />
        <div className="cont">

        {/* first Info  */}
        <div className="col-sm-8 m-auto text-center">
            <h2 style={{textAlign:'unset'}} >Begin your journey with a Conmentr</h2>
            <p style={{textAlign:'unset', fontSize:'14px'}}>
              India's 1<sup>st</sup> social learning website built on Artificial
              Intelligence and compatible with Virtual Reality and Augment
              Reality.
            </p>
            <div className="wrapper">
              <Link to="/register">
                <div className="btn1 btn--border btn--primary btn--animated"><b>Get Started</b></div>
              </Link>
            </div>
       
        </div>


      

        {/* giffy image */}

        <div className="row" >
          <div className="col-sm-1" />
          <div className="col-sm-9" style={{paddingLeft: '3%'}}>
            <embed type="image/svg+xml" src={require("../../assets/images/giffy.svg")} />
          </div>
        </div>

         {/* row2 Cards*/}

        <div className="row m-auto row1card" style={{paddingTop: '10px'}}> 
          <div className="col-sm-12">
            <div className="row m-auto">
               {/* card 1 */}
              <div className="col-sm-3 card m-2 box text-center">
                <div className="d-inline-block" style={{paddingTop: '15%'}}>
                  <div className="col-sm-2">
                    <img src={require("./../../assets/images/computer.jpg")} className="rounded" alt="computer" />
                  </div>
                </div>
                <div className="row" style={{paddingTop: '10%'}}>
                  <div className="col-sm-12">
                    <h4 style={{textAlign:'unset'}}>Optimized for Any Device</h4>
                  </div>
                </div>
                <div className="row" style={{paddingTop: '10%'}}>
                  <div className="col-sm-12">
                    <p>No matter what device it is. Each of our themes is
                      natively responsive, resizing your content and images to fit any
                      device and width. You can also adjust them in your way.</p>
                  </div>
                </div>
              </div>

               {/* card 2 */}
              <div className="col-sm-3 card box m-2 text-center">
                <div className=" d-inline-block " style={{paddingTop: '15%'}}>
                  <div className="col-sm-2">
                    <img src={require("../../assets/images/fonts.jpg")} className="rounded" alt="computer" />
                  </div>
                </div>
                <div className="row" style={{paddingTop: '10%'}}>
                  <div className="col-sm-12">
                    <h4 style={{textAlign:'unset'}}>Thousands of Fonts and Icons</h4>
                  </div>
                </div>
                <div className="row" style={{paddingTop: '10%'}}>
                  <div className="col-sm-12">
                    <p>We have thousands of font options included our custom
                      fonts as well as all google fonts. We also have custom icon
                      packs along with icon fonts like font awesome and icofont.</p>
                  </div>
                </div>
              </div>
              <div className="col-sm-3 card box m-2 text-center">
                <div className=" d-inline-block " style={{paddingTop: '15%'}}>
                  <div className="col-sm-2">
                    <img src={require("../../assets/images/h-secured.png")} className="rounded" alt="secured" />
                  </div>
                </div>
                <div className="row" style={{paddingTop: '10%'}}>
                  <div className="col-sm-12">
                    <h4 style={{textAlign:'unset'}}>Highly Secured Platform</h4>
                  </div>
                </div>
                <div className="row" style={{paddingTop: '10%'}}>
                  <div className="col-sm-12">
                    <p>We have thousands of font options included our custom
                      fonts as well as all google fonts. We also have custom icon
                      packs along with icon fonts like font awesome and icofont.</p>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>


        {/* row3 cards   */}
        <div className="row m-auto" style={{paddingTop: '4%'}}>
          <div className="col-sm-11" style={{paddingLeft: '5%'}}>
            <div className="row" style={{justifyContent: 'center'}}>
              <div className="col-sm-8 box">
                <div className="">
                  <div className="col-sm-8 pt-2 text-center">
                    <h6 style={{textAlign:'unset'}}>No Coding Skill? No Problem!</h6>
                  </div>
                </div>
                <div className="" style={{paddingTop: '2%'}}>
                  <div >
                    <h5 style={{textAlign:'unset'}}>Our Platform is fully automated and we have thousands of
                      options for each industry.</h5>
                  </div>
                </div>
                <div className="row pt-3 p-1" >
                  <div className="col-sm-12">
                    <p>You will never be disappointed at lifepage. Lifepage has a
                      huge template library for each and every industry.Our every
                      single template has everything that you will need for your
                      business.Every template of lifepage is unique with a great UX
                      which will help you to grow up your business.</p>
                  </div>
                </div>
                <div className="text-center" style={{paddingTop: '2%'}}>
                <div className="col-sm-2"/>
                    <button className="bttn_link SeeBtn a-btn">See
                      Our Templates
                    </button>
                    {/*   <button type="button" class="btn btn-danger" style="height:60px;width:250px;">See Our Templates</button>*/}
                  
                </div>
              </div>
              <div className="col-sm-4 text-center box">
                <div className="row d-inline-block" style={{paddingTop: '1.5%'}}>
                  <div className="col-sm-2">
                    <img src={require("../../assets/images/e-commerce.jpg")} className="rounded" alt="computer" />
                  </div>
                </div>
                <div className="" style={{paddingTop: '10%'}}>
                  <div className="col-sm-12">
                    <h4 style={{textAlign:'unset'}}>e-Commerce Integration</h4>
                  </div>
                </div>
                <div className="" style={{paddingTop: '10%'}}>
                  <div className="col-sm-12">
                    <p>Each of out themes is natively supported e-commerce
                      features. The integration is super simple. There are also
                      hundreds of plugins available on our platform for e-commerce.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-1" />
        </div>


        {/* r0w 3 cards */}
        <div className="row m-auto col-sm-12">
          {/* <div className="col-sm-1" /> */}
          <div className="col-sm-6 container-card">
            <div className="col-sm-12 box d-inline-block p-4">
              {/* <div className="col-sm-1" /> */}
              {/* <div className="col-sm-10"> */}
                <h3 >Pick the theme you love</h3>
              {/* </div>
            </div>
            <div className="col-sm-12">
              <div className="col-sm-1" />
              <div className="col-sm-10"> */}
                <p>Represent your business or ideas in a most beautiful way
                  with our themes.All our themes designed and developed by world top
                  desinger and developer and every piece of work is unique and made
                  with care</p>
                <br />
                <button type="button" className="SeeBtn a-btn "><b>Browse All Templates</b></button>
              {/* </div> */}
            </div>
          </div>
          <div className="col-sm-6">
            <div className="row" style={{paddingTop: '12%', paddingBottom: '10%'}}>
              <div className="col-sm-2" />
              <div className="col-sm-10">
                <embed type="image/svg+xml" src={require("../../assets/images/brain.svg")} />
              </div>
            </div>
          </div>
        </div>

        {/* row 4 cards */}
        <div className="row m-auto" >

          <div className="col-sm-5 text-center box m-auto">
            <div className="" style={{paddingTop: '10%'}}>
              <div className="col-sm-1" />
              <div className="col-sm-9 ">
                <h4 style={{textAlign:'unset'}}>Stories from our valueable Customers</h4>
              </div>
            </div>
            <div className="" style={{paddingTop: '8px'}}>
              <div className="col-sm-1" />
              <div className="col-sm-9" style={{padding: '0px'}}>
                <p>over 44,306 people and business have come to us for their
                  websites.Read their reviews of lifepage to learn how great website
                  changed their world.</p>
              </div>
            </div>
            <div className="">
              <div className="col-sm-2" />
              <div className="col-sm-6" style={{padding: '10px'}}>
                <button type="button" className="SeeBtn a-btn ">
                  Read All Reviews
                </button>
              </div>
            </div>
          </div>
          
          <div className="col-sm-5 m-auto card-body text-center">
            <div className="row">
              <div className="card" >
                <div className="">
                  <div className="col-sm-11">
                    <div className="">
                      <div className="col-sm-12 cont_div shown" id="section1">
                        <div className="" style={{paddingTop: '5%'}}>
                          <div className="col-sm-1" />
                          <div className="col-sm-2">
                            <img src={require("../../assets/images/img_avatar.png")} className="rounded-circle" alt="Cinque Terre" width="80px;" height="80px;" style={{}} />
                          </div>
                          <div className="col-sm-9">
                            <h5>Surya Eac Solutions</h5>
                            <h6>Manager</h6>
                          </div>
                        </div>
                        <div className="">
                          <div className="col-sm-1" />
                          <div className="col-sm-10">
                            <p style={{paddingTop: '30px'}}>This process was so easy
                              and quick.I'm so glad we were referred to this program.If we
                              had gone the traditional route we would have spent much more
                              and would have been limited one design ideas/interpretation.
                              Extremely pleased with how this turned out!</p>
                          </div>
                        </div>
                      </div>
                      
                    </div>
                  </div>
                  {/* <div className="col-sm-1" style={{paddingTop: '14%'}}>
                    <div className="row">
                      <i className="fa fa-chevron-circle-up" style={{fontSize: '32px'}} id="next" />
                    </div>
                    <div className="row" style={{paddingTop: '70%'}}>
                      <i className="fa fa-chevron-circle-up fa-flip-vertical" style={{fontSize: '32px'}} id="prev" />
                    </div>
                  </div> */}
                </div>
                <div className="row" style={{paddingBottom: '2%'}}>
                  <div className="col-sm-1" />
                  <div className="col-sm-10" style={{paddingLeft: '10px'}}>
                    <button style={{textDecoration: 'underline', color:'#11AF99'}}>See the
                      Website </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

{/* row 5 cards */}
        <div className="row" style={{paddingBottom: '6%', justifyContent:'center'}}>
          <div className="col-sm-5 text-center ">
            <img src={require("../../assets/images/vr.png")} className="img-rounded" alt="virutal Reality" style={{opacity:"0.3"}}/>
            </div>
          <div className="col-sm-6 text-center">
            <div className="" style={{paddingTop: '250px'}} />
            <div className="" >
              <div className="col-sm-3" />
              <div className="col-sm-9">
                <h2 style={{textAlign:'unset'}}>Virtual Reality (VR)</h2>
                <p>Our mission is to bring innovation to life, we introduce a
                  new cutting edge concept of virtual social learning network, where
                  users have a friendly and Interactive Virtual Assistant which
                  drives you to the replica of real world labs, this VR environment
                  will simulate individual neurons which leads to better
                  understanding of technology.</p>
                <br />
                <button type="button" className="SeeBtn a-btn ">Play Video</button>
              </div>
            </div>
          </div>
          <div className="col-sm-1"></div>
        </div>

      {/* row 5 cards */}
        <div className="row" style={{justifyContent :'center'}} >
        <div className="col-sm-6 card">
            <img src={require("../../assets/images/page-6-img.png")} className="img-rounded" alt="Cinque Terre"  style={{paddingTop: '1%', paddingBottom: '5%'}} />
          </div>
          <div className="col-sm-5 text-center">
            <div className="" style={{paddingTop: '250px'}}>
              <div className="col-sm-1" />
              <div className="col-sm-10" style={{padding: '0%'}}>
                <h3 style={{textAlign:'unset'}}>
                  Hi I Am Mr.<strong style={{color: 'red'}}>Curious</strong>
                </h3>
              </div>
            </div>
            <div className="" style={{paddingTop: '8px'}}>
              <div className="col-sm-1" />
              <div className="col-sm-10" style={{padding: '0%'}}>
                <p>I Am Curious to absorb every technological</p>
                <button type="button" className="SeeBtn a-btn" >Get Started Now</button>
              </div>
              <div className="col-sm-1" />
            </div>
          </div>
          
        </div>
      </div>   
    <Footer/> 
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { loggedIn } = state.users;
  return {
    loggedIn
  }; 
}

export default connect(mapStateToProps)(Home);