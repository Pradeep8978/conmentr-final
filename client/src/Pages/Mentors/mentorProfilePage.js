import React from 'react';
import { connect } from 'react-redux';
import './newHome.css';

class mentorProfilePage extends React.Component {

    render() {
        return (
            <div>
                something
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

export default connect(mapStateToProps)(mentorProfilePage);
