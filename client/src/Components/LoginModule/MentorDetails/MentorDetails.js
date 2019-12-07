import React from 'react';
import { withFormik, Form, Field } from 'formik';
import * as  Yup from 'yup';

import './mentorDetails.scss';

const MentorDetails = ({
  errors,
  touched,
  isSubmitting,
  showNextStep,
  nextStep
}) => (
  <Form className="mx-auto mentorDetails">
    { showNextStep ? 
      <div>
        <div className="mx-auto group">
          <Field type="select" name="company" placeholder="Company" />
          { touched.company && errors.company && <p>{errors.company}</p> }
        </div>
        <div className="mx-auto group">
          <Field type="select" name="cost" placeholder="Charge / min" />
          { touched.cost && errors.cost && <p>{errors.cost}</p> }
        </div>
        <div className="mx-auto group">
          <Field component="textarea" name="aboutMentor" placeholder="About me" rows="4" cols="50"/>
          { touched.aboutMentor && errors.aboutMentor && <p>{errors.aboutMentor}</p> }
        </div>
        <button className="btn btn-oval float-right">Update Profile</button>
      </div> :
      <div>
        <div className="mx-auto group">
          <h5>Attach Resume</h5>
          <Field type="file" name="resume" placeholder="Attach Resume"/>
          { touched.resume && errors.resume && <p>{errors.resume}</p> }
        </div>
        <div className="mx-auto group">
          <Field type="select" name="skills" placeholder="Skills" />
          { touched.skills && errors.skills && <p>{errors.skills}</p> }
        </div>
        <div className="mx-auto group">
          <Field type="select" name="designation" placeholder="Designation" />
          { touched.designation && errors.designation && <p>{errors.designation}</p> }
        </div>
        <div className="mx-auto group">
          <Field type="select" name="iama" placeholder="I am a" />
          { touched.iama && errors.iama && <p>{errors.iama}</p> }
        </div>
          <button className="btn btn-oval float-right"  onClick={(e) => nextStep(e) } disabled={isSubmitting}>Next</button>
      </div> 
    }
  </Form>
)

const MentorDetailsForm = withFormik({
  mapPropsToValues({ resume, skills}) {
    return {
      resume: resume || '',
      skills: skills || ''
    }
  },
  validationSchema: Yup.object().shape({
    resume: Yup.string().required('*File is required'),
    skills: Yup.string().required('*Skills Name is required')
  }),
  handleSubmit(values, {resetForm, props}) {
      props.updateMentorProfile(values);
      resetForm();
  }
})(MentorDetails)

export default MentorDetailsForm;
