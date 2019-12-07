import React from 'react';
import { connect } from 'react-redux';
import user from "../../assets/images/user.png";
import logoImage from '../../assets/images/subrains.png'
import utilMap from './util';
import $ from 'jquery';
import { userActions } from '../../_actions';
import './Header.scss'

class MentorProfilePage extends React.Component {

    getLogOutBtn = () => {
        const userData = utilMap.getUserData();
        return (userData) && (
            <div className="pull-right">
                <button type="button" className="btn btn-default" onClick={this.handleLogout}>Logout</button>
            </div>
        );
    };
    componentDidMount() {
        $(document).scroll(function () {
            if ($(this).scrollTop() > 550) {
                $('.navbar-custom').removeClass('navbar-abs').addClass('fixed-top');
            }
            if ($(this).scrollTop() < 550) {
                $('.navbar-custom').addClass('navbar-abs').removeClass('fixed-top');
            }
        });
    }
    handleLogout = () => {
        this.props.dispatch(userActions.logout());
    }

    render() {
        return (
            <div className="header_section">
                <div className="row">
                    <div className="col-sm-2 col-md-2 col-xs-2">
                        <img src={logoImage} alt="logo" class="logo" />
                    </div>
                    <div className="col-md-2">
                    </div>
                    <div className="col-md-3 col-sm-3 col-xs-3">
                        <div className="row">
                            <div className="col-sm-11">
                                <input type="search" className="form-control" placeholder="Search..."/>
                            </div>
                            <div className="col-sm-1">
                                <div className="searchicon">
                                {/* <a><i className="fa fa-search"/></a> */}
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-2 col-md-2 col-xs-2"></div>
                    <div className="col-sm-1 col-md-1 col-xs-1 user_text">
                        <div className="dropdown">
                            <button type="submit" className="btn dropdown-toggle" data-toggle="dropdown">
                                <b>User Name</b>
                            </button>
                            <div className="dropdown-menu">
                                <button className="dropdown-item" ><a className="dropdown-item">link1</a></button>
                                <button className="dropdown-item"><a className="dropdown-item">Link 2</a></button>
                                <button className="dropdown-item" onClick={this.handleLogout}><a className="dropdown-item">Logout</a></button>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-1 col-md-1 col-xs-1 user_image">
                        <img src={user} alt="user" className="user" />
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
