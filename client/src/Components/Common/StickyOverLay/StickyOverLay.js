import React from 'react';
import './stickyOverlay.scss';

class StickyOverLay extends React.Component {
    render () {
        return (
            <div className="sticky-overlay col-lg-2">
                { this.props.children }
            </div>
        )
    }
}

export default StickyOverLay;