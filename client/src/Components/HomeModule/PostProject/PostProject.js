import React from 'react';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';

import './postProject.scss';

const PostProj = ({
  errors,
  touched,
  isSubmitting
}) => (
  <Form className="mx-auto postProject">
    <div className="mx-auto">
      <Field type="text" name="projName" placeholder="Name of the Project"/>
      { touched.projName && errors.projName && <p>{errors.projName}</p> }
    </div>
    <div className="mx-auto">
      <Field component="textarea" name="projDesc" placeholder="Enter Description"/>
      { touched.projDesc && errors.projDesc && <p>{errors.projDesc}</p> }
    </div>
    <button className="btn btn-primary-color float-right" type="submit" disabled={isSubmitting}>Post</button>
  </Form>
)

const PostProjForm = withFormik({
  mapPropsToValues({ projName, projDesc}) {
    return {
      projName: projName || '',
      projDesc: ''
    }
  },
  validationSchema: Yup.object().shape({
    projName: Yup.string().required('*Name is required'),
    projDesc: Yup.string().required('*Please enter Description')
  }),
  handleSubmit(values, {resetForm}) {
        console.log(values);
        resetForm();
  }
})(PostProj)

export default PostProjForm;
