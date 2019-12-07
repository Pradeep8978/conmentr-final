import React from 'react';
import './headerImage.scss';

class HeaderImage extends React.Component {
  render() {
    return (
        <div className={"headerImage col-md-6 col-sm-6 d-sm-block "+this.props.classes}>
          <img alt="header" src={require("./../images/headerImage.gif")} />
        </div>
      )
  }
}

export default HeaderImage;
