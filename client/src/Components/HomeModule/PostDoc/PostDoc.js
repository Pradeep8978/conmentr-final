import React from 'react';
import { withFormik, Form, Field } from 'formik';
// import yup from 'yup';
import * as yup from 'yup'; 
import './postDoc.scss';

const PostDoc = ({
  values,
  errors,
  touched,
  isSubmitting
}) => (
  <Form className="mx-auto postDoc">
    <div className="mx-auto">
      <Field type="text" name="docName" placeholder="Name of the Document"/>
      { touched.docName && errors.docName && <p>{errors.docName}</p> }
    </div>
    <div className="mx-auto">
      <Field component="textarea" name="docDesc" placeholder="Enter Description"/>
      { touched.docDesc && errors.docDesc && <p>{errors.docDesc}</p> }
    </div>
    <div className="mx-auto">
      <Field type="file" name="docFile" placeholder="Choose File"/>
      { touched.docFile && errors.docFile && <p>{errors.docFile}</p> }
    </div>
    <button className="btn btn-primary-color float-right" type="submit" disabled={isSubmitting}>Post</button>
  </Form>
)

const PostDocForm = withFormik({
  mapPropsToValues({ docFile, docName, docDesc}) {
    return {
      docFile: docFile || '',
      docName: docName || '',
      docDesc: ''
    }
  },
  validationSchema: yup.object().shape({
    docName: yup.string().required('*Name is required'),
    docFile: yup.string().required('*File is required'),
    docDesc: yup.string().required('*Please enter Description')
  }),
  handleSubmit(values, {resetForm}) {
        console.log(values);
        resetForm();
  }
})(PostDoc)

export default PostDocForm;
