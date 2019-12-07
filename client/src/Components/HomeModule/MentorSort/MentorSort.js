import React from 'react';
import Slider from 'react-rangeslider';
import './mentorSort.scss';
import 'react-rangeslider/lib/index.css'

class MentorSort extends React.Component {
  constructor (props, context) {
    super(props, context)
    this.state = {
      value: 0
    }
    this.handleChange = this.handleChange.bind(this);
    this.onChangeDomain = this.onChangeDomain.bind(this);
  }
  handleChangeStart() {
    console.log('Change event started')
  };

  handleChange(value) {
    this.setState({
      value
    });
    this.props.filterMentors(value);
  };

  handleChangeComplete() {
    console.log('Change event completed')
  };

  onChangeDomain(e) {
    this.props.onChangeDomain(e);
  }

  render() {
    const { value } = this.state;
    return (
        <div className={"mentorSort col-lg-11 col-sm-12 col-12 mb-4 "+this.props.classNames}>
         <div className="purple col-lg-12">Filters</div>
         <div className="card">
          <div className="card-body">
            <form className="row">
              {/* <div className="col-md-12"> 
                <div  className="col-md-6 pull-right">
                  <a className="btn btn-trans pull-right" type="button" data-toggle="collapse" href="#mentorSortForm" aria-expanded="false" aria-controls="mentorSortForm">
                    <i className="fa fa-bars"></i>
                  </a>
                </div>
              </div> */}
              <div id="mentorSortForm" /*className="row collapse"*/ className="row">
                <div className="form-group col-md-6 col-sm-6 col-12">
                  <div className="pull-left col-lg-5">
                    <label htmlFor="domain">Domain to learn</label>
                  </div>
                  <div className="pull-left col-lg-7">
                    <select className="form-control" id="domain" onChange={this.onChangeDomain}>
                      <option>Web Development</option>
                      <option>AWS Development</option>
                      <option>Backend Development</option>
                    </select>
                  </div>
                </div>
                <div className="form-group col-md-6 col-sm-6 col-12">
                  <div className="pull-left col-lg-5">
                    <label htmlFor="experience">Experience</label>
                  </div>
                  <div className="pull-left col-lg-7">
                    <select className="form-control" id="experience">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                    </select>
                  </div>
                </div>
                <div className="form-group col-md-6 col-sm-6 col-12">
                  <div className="pull-left col-lg-5">
                    <label htmlFor="skills">Skills</label>
                  </div>
                  <div className="pull-left col-lg-7">
                    <select className="form-control" id="skills">
                      <option>HTML</option>
                      <option>CSS</option>
                      <option>JS</option>
                      <option>React js</option>
                    </select>
                  </div>
                </div>
                <div className="form-group col-md-6 col-sm-6 col-12">
                  <div className="pull-left col-lg-5">
                    <label htmlFor="timings">Timings</label>
                  </div>
                  <div className="pull-left col-lg-7">
                    <select className="form-control" id="timings">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                    </select>
                  </div>
                </div>
                <div className="form-group col-12 col-lg-12">
                  <div className="col-lg-3 pull-left col-sm-3">
                    <label htmlFor="price">Pricing</label>
                  </div>
                  <div className='slider col-lg-7 pull-left col-sm-7'>
                    <Slider
                      min={0}
                      max={100}
                      value={value}
                      onChangeStart={this.handleChangeStart}
                      onChange={ (e) => this.handleChange(e) }
                      onChangeComplete={this.handleChangeComplete}
                      className="col-lg-10 pull-left"
                    />
                    <div className="value pull-left col-lg-2">{"$ " +value}</div>
                  </div>
                </div>
                </div>
            </form>
          </div>
          </div>
        </div>
      )
  }
}

export default MentorSort;
