import React from 'react';
import { connect } from 'react-redux';
import './newHome.css';
import { Link } from "react-router-dom"

class AttachResume extends React.Component {

    state = {

    };

    convertToBase64() {
        //Read File
        var selectedFile = document.getElementById("inputFile").files;
        //Check File is not Empty
        if (selectedFile.length > 0) {
            // Select the very first file from list
            var fileToLoad = selectedFile[0];
            // FileReader function for read the file.
            var fileReader = new FileReader();
            var base64;
            // Onload of file read the file content
            fileReader.onload = function(fileLoadedEvent) {
                base64 = fileLoadedEvent.target.result;
                // Print data in console
                console.log(base64);
            };
            // Convert data to base64
            fileReader.readAsDataURL(fileToLoad);
        }
    }

    onUploadResume = (e) => {
        debugger;
    }

    render() { 
        
        return (
            <div>
                <div class="navigationBarBlock">
                    <div class="navigationBarBlockInr">
                        <div class="logo_main">
                            <a class="navbar-brand" href="#"><img src="img/header_logo.png" alt="HeadLogo" /></a>
                        </div>
                        <div class="navigationBar">

                            <ul class="m-0 float-right">
                                <li class="nav_item_active">
                                    <a href="#">HOME</a>
                                </li>
                                <li>
                                    <a href="#">ABOUT</a>
                                </li>
                                <li>
                                    <a href="#">SERVICE</a>
                                </li>
                                <li>
                                    <a href="#">WORK</a>
                                </li>
                                <li>
                                    <a href="#">BLOG</a>
                                </li>
                                <li>
                                    <a href="#">CONTACT</a>
                                </li>
                            </ul>

                        </div>
                    </div>
                </div>

                <div class="container-fluid bg_imag float-left">
                    <div class="container">
                        <div class="brow_btn">
                            <h1 class="attachr_t">ATTACH RESUME</h1>
                            <button class="button btnb" onclick="inputClick()">BROWSE</button>
                            <input type="file" name="attachbrow" onChange={this.onUploadResume} id="attachbrow" style="display: none;" />
                        </div>

                        <div class="sk_btn">
                            <h1 class="attachr_t">SKILLS</h1>
                            <div class="col-sm-5 mx-auto">
                                <div class="form-group">
                                    <input type="text" class="form-control" id="enter_skills" placeholder="Enter Skills" />
                                </div>
                            </div>

                        </div>

                        <div class="row course_ac">
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
                        </div>

                        <div class="sub_cent">
                            <button type="submit" class="btn btn_info">NEXT<i class="fa fa-chevron-circle-right"></i></button>
                            
                        </div>
                        <button type="submit" class="btn btn_info">
                                <Link to="/register">PREVIOUS</Link><i class="fa fa-chevron-circle-left"></i></button>
                    </div>
                </div>
            </div>
            // <footer id="contact" class="col-sm-12 page-footer font-small indigo bg_color float-left">
            //     <div class="container cgap">
            //         <div class="row">
            //             <div class="col-md-4 mx-auto lm_top">
            //                 <a href="#"><img src="img/footer_logo.png" /></a>
            //             </div>
            //             <div class="col-md-2 mx-auto mar_top">

            //                 <h5 class="f_hea">COMPANY</h5>
            //                 <ul class="list-unstyled list_l">
            //                     <li>
            //                         <a href="#!">ABOUT US</a>
            //                     </li>
            //                     <li>
            //                         <a href="#!">BLOG</a>
            //                     </li>
            //                 </ul>

            //             </div>
            //             <div class="col-md-2 mx-auto top_m">


            //                 <ul class="list-unstyled gaps list_l">
            //                     <li>
            //                         <a href="#!">JOBS</a>
            //                     </li>
            //                     <li>
            //                         <a href="#">BECOME A MENTOR</a>
            //                     </li>
            //                 </ul>

            //             </div>
            //             <div class="col-md-2 mx-auto mar_top">

            //                 <h5 class="f_hea">SUPPORT</h5>
            //                 <ul class="list-unstyled gaps list_l">
            //                     <li>
            //                         <a href="#!">CONTACT US</a>
            //                     </li>
            //                     <li>
            //                         <a href="#">HELP & FAQ</a>
            //                     </li>
            //                 </ul>

            //             </div>

            //             <div class="col-md-2 mx-auto top_m">

            //                 <ul class="list-unstyled gaps list_l">
            //                     <li>
            //                         <a href="#!">PRIVACY</a>
            //                     </li>
            //                     <li>
            //                         <a href="#">TERMS</a>
            //                     </li>
            //                 </ul>

            //             </div>

            //         </div>

            //     </div>
            //     <div class="container"><hr /></div>
            //     <div class="py-3">
            //         <div class="row">
            //             <div class="col-sm-4"></div>
            //             <div class="col-sm-4 footer_div">2018 - 2019 © <span class="footer_text">Conmentr</span>, Inc</div>
            //             <div class="col-sm-4"></div>
            //         </div>
            //     </div>

            // </footer>

        );
    }
}

function mapStateToProps(state) {
    const { items } = state.users;
    return {
        items
    };
}

export default connect(mapStateToProps)(AttachResume);
