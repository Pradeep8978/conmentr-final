
import React from 'react';
import { connect } from 'react-redux';
import './newHome.css';

// import Header_Component from './Header';
// import SideBar from './NavBarButton';

class MenuBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            MentorsList: [{},
            ]
        }
    }

    render() {
        return (
            <div className="navigation_top_block">
                <ul className="m-0 p-0">
                    <li className="active_top_nav">
                        <div className="navigation_top_item">
                            ALL
                                </div>
                    </li>
                    <li className="">
                        <div className="navigation_top_item">
                            Mentors
                                </div>
                    </li>
                    <li className="">
                        <div className="navigation_top_item">
                            Blogs
                                </div>
                    </li>
                    <li className="">
                        <div className="navigation_top_item">
                            Documents
                                </div>
                    </li>
                    <li className="">
                        <div className="navigation_top_item">
                            Projects
                                </div>
                    </li>
                    <li className="">
                        <div className="navigation_top_item">
                            Startups
                                </div>
                    </li>
                </ul>
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

export default connect(mapStateToProps)(MenuBar);
