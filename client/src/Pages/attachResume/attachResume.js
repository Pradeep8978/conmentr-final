import React, { Component } from 'react';
import Header from "../Common/Site/Header";
import Footer from "../Common/Site/Footer";
class attachResume extends Component {
    render() {
        return (
            <div>
                <Header />
            
            <div className="container-fluid bg_imag float-left">
  <div className="container">
    <div className="brow_btn">
      <h1 className="attachr_t">ATTACH RESUME</h1>
      <button className="button btnb">BROWSE</button>
      <input type="file" name="attachbrow" id="attachbrow" style={{display: 'none'}} />
    </div>
    <div className="sk_btn">
      <h1 className="attachr_t">SKILLS</h1>
      {/*button class="buttons btnml" class="fa fa-user input-icon">MACHINE LEARNING <span class="glyphicon glyphicon-menu-down"></button*/}
      <div className="col-sm-5 mx-auto">
        <div className="form-group">
          <input type="text" className="form-control" id="enter_skills" placeholder="Enter Skills" />
        </div>
      </div>
    </div>
    {/* <div class="row course_ac">
			<div class="col-sm-3">
				<button class="button btnc">PYTHON<span class="glyphicon glyphicon-remove-circle"></span></button>
			</div>
			<div class="col-sm-3">
				<button class="button btnc">COMPUTER VISION<span class="glyphicon glyphicon-remove-circle"></span></button>
			</div>
			<div class="col-sm-3">
				<button class="button btnc">PARALLEL PROGRAMMING<span class="glyphicon glyphicon-remove-circle"></span></button>
			</div>
			<div class="col-sm-3">
				<button class="button btnc">JAVA<span class="glyphicon glyphicon-remove-circle"></span></button>
			</div>
		</div> */}
    <div className="sub_cent">
      <button type="submit" className="btn btn_info" style={{background: '#da597e'}}>NEXT<i className="fa fa-chevron-circle-right" /></button>
    </div>
  </div>
</div>
<Footer />
</div>
        );
    }
}

export default attachResume;