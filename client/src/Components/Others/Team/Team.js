import React from 'react';
import TeamDetails from './teamDetails.js';

import './team.scss';

class Team extends React.Component {
  render() {
    console.log(TeamDetails.members);
    return (
      <div className={"team container"}>
        <div id="carouselIndicators" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            {TeamDetails.members.map((item,key) => (
              <li data-target="#carouselIndicators" data-slide-to={key} className={item.class}></li>
            ))}

          </ol>

          <div className="carousel-inner mt-5 mb-5">
            {TeamDetails.members.map((item, key) => (
                <div className={"carousel-item "+item.class} key={key}>
                  <div className="row">
                      <div className="col-md-6 col-sm-6 col-12">
                        <h3>{item.name}</h3>
                        <h5>{item.role}</h5>
                        <h5>{item.position}</h5>
                        <p className="mt-3 text-justify">{item.description}</p>
                      </div>
                      <div className="col-md-6 col-sm-6 col-12">
                        <img src={require(`${item.imgPath}`)} alt={item.name} className="" />
                      </div>
                    </div>
                  </div>))}
            </div>
          </div>
        </div>
      )
  }
}

export default Team;
