import React from 'react'
import Dropdown from './../../Components/Common/Dropdown/Dropdown';
import { connect } from 'react-redux';
import Axios from 'axios';
import { NotificationContainer, NotificationManager } from 'react-notifications';

const LANG_OPTIONS = [
    {
        label: "Java",
        value: "java"
    }, {
        label: "PHP",
        value: "php"
    }, {
        label: "HTML",
        value: "Value"
    }
]

class EditDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            formData: {}
        }
    }

    componentDidMount() {
        this.updateExistingValues();
    }

    updateExistingValues = () => {
        const { profile } = this.props;
        const formData = {
            name: profile.name,
            languages: profile.languages,
            organization: profile.organization,
            designation: profile.designation,
            role: profile.role,
            jobType: profile.jobType,
            experienceLevel: profile.experienceLevel,
            about: profile.about
        }
        this.setState({ formData });
    }

    createNotification = (type) => {
        NotificationManager[type]('Info message');
    }

    onChangeValue = e => {
        const { formData } = this.state;
        formData[e.target.name] = e.target.value;
        this.setState({ formData });
    }

    onChangeRole = e => {
        const { formData } = this.state;
        const { value } = e.target;
        if (formData.role.includes(value)) {
            formData.role = formData.role.filter(o => o !== value)
        } else {
            formData.role.push(value);
        }
        this.setState({formData})
    }

    onChangeLanguages = options => {
        const { formData } = this.state;
        formData.languages = options.map(o => o.value);
        this.setState({ formData });
    }

    onSubmit = (e) => {
        e.preventDefault();
        const { formData } = this.state;
        Axios.put('/users/profile/update', formData).then(res => {
            this.createNotification('success', 'Successfuly Updated')
            this.setState({ data: res.data })
        }).catch(err => {
            this.createNotification('error', 'Failed to Update! Please Try again...')
            this.setState({ error: err });
        })
    }

    render() {
        const { formData } = this.state;
        return (
            <div className="container">
                <NotificationContainer />
                <h1>Edit Profile</h1>
                <hr />
                <div className="row">
                    <div className="col-md-3">
                        <div className="text-center">
                            <img src="//placehold.it/100" className="avatar img-circle" alt="avatar" />
                            <h6>Upload a different photo...</h6>

                            <input type="file" className="form-control" />
                        </div>
                    </div>

                    <div className="col-md-9 personal-info">
                        <div className="alert alert-info alert-dismissable">
                            <a className="panel-close close" data-dismiss="alert">×</a>
                            <i className="fa fa-coffee"></i>
                            This is an
                            <strong>.alert</strong>. Use this to show important messages to the user.
                        </div>
                        <h3>Personal info</h3>

                        <form className="form-horizontal" onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <label className="col-lg-3 control-label">Name:</label>
                                <div className="col-lg-8">
                                    <input className="form-control" type="text" name="name" value={formData.name} onChange={this.onChangeValue} />
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="col-lg-3 control-label">Languages/Technologies</label>
                                <div className="col-lg-8">
                                    <Dropdown multi options={LANG_OPTIONS} onChange={this.onChangeLanguages} /> {/* <input className="form-control" type="text" value="Bishop" /> */}
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="col-lg-3 control-label">Organization:</label>
                                <div className="col-lg-8">
                                    <input className="form-control" type="text" name="organization" value={formData.organization} onChange={this.onChangeValue} />
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="col-lg-3 control-label">Designation:</label>
                                <div className="col-lg-8">
                                    <input className="form-control" type="text" name="designation" value={formData.designation} onChange={this.onChangeValue} />
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="col-lg-3 control-label">Roles</label>
                                <div className="col-lg-8">
                                    <div className="col-lg-4">
                                        <label className="mr-1">Mentor</label>
                                        <input name="mentor" value="mentor" type="checkbox" checked={formData.role && formData.role.includes('mentor')} onChange={this.onChangeRole} />
                                    </div>
                                    <div className="col-lg-4">
                                        <label className="mr-1">Student</label>
                                        <input name="student" value="student" type="checkbox" checked={formData.role && formData.role.includes('student')}  onChange={this.onChangeRole} />
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="col-md-3 control-label">Job Type</label>
                                <div className="col-md-8">
                                    <input className="form-control" type="text" name="jobType" value={formData.jobType} onChange={this.onChangeValue} />
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="col-md-3 control-label">Experience Level:</label>
                                <div className="col-md-8">
                                    <input className="form-control" type="text" name="experienceLevel" value={formData.experienceLevel} onChange={this.onChangeValue} />
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="col-md-3 control-label">Location</label>
                                <div className="col-md-8">
                                    <input className="form-control" name="location" value={formData.location} onChange={this.onChangeValue} />
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="col-md-3 control-label">About</label>
                                <div className="col-md-8">
                                    <textarea className="form-control" rows="6" type="password" name="about" value={formData.about} onChange={this.onChangeValue} />
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="col-md-3 control-label"></label>
                                <div className="col-md-8">
                                    <input type="submit" className="btn btn-primary" value="Save Changes" />
                                    <span></span>
                                    <input type="reset" onClick={() => this.updateExistingValues()} className="btn btn-default" value="Cancel" />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
};


const mapStateToProps = state => ({
    profile: state.users.profile
})

export default connect(mapStateToProps)(EditDetails)
