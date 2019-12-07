
import React from 'react';
import { connect } from 'react-redux';
// import camera from "../../assets/images/camera.png";
// import edit from "../../assets/images/edit.png";
// import quote from "../../assets/images/quote.png";

import './newHome.css';
import './navBarButton.scss';
import { Link } from 'react-router-dom'


class navBarButton extends React.Component {

    state ={
          openBlogs : false
    }



    render() {
        return (
            <div className="Side_container">
                <div className="row">
                        <div className="buttons ">
                            <button className="btnA"><b>Mentors</b></button>
                            <button className="btnC"><b>Documents</b></button>
                            <button className="btnB" ><Link to="/NewBlog "><b style={{color:'#11AF99'}}>Blogs</b></Link></button>
                            <button className="btnD"><b>Projects</b></button>
                            <button className="btnE" ><b>Startups</b></button>
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

export default connect(mapStateToProps)(navBarButton);
