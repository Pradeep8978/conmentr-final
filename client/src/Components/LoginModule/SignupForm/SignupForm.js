import React from 'react';
import { withFormik, Form, Field } from 'formik';
import * as  Yup from 'yup';
import './signupForm.scss';

const Signup = ({
  values,
  errors,
  touched,
  isSubmitting
}) => (
  <Form className="mx-auto signupForm">
    <h4 className="ml-3 btn btn-oval">Signup</h4>
    <br/>
    {/* Email Field */}
    <div className="group">
      <Field type="email" name="email" autocomplete="off" placeholder="Email"/>
      <span className="highlight"></span>
      <span className="bar"></span>
      { touched.email && errors.email && <p className="errors">{errors.email}</p> }
    </div>

    {/* Name Field */}
    <div className="group">
      <Field type="text" name="firstName" autocomplete="off" placeholder="Name"/>
      <span className="highlight"></span>
      <span className="bar"></span>
      { touched.firstName && errors.firstName && <p className="errors">{errors.firstName}</p> }
    </div>
    <div className="group">
      <Field component="select" name="roleId">
        <option value="">Apply to be a?</option>
        <option value="1">Mentor</option>
        <option value="2">Student</option>
      </Field>
      <span className="highlight"></span>
      <span className="bar"></span>
      { touched.roleId && errors.roleId && <p className="errors">{errors.roleId}</p> }
    </div>
    <div className="group">
      <Field type="password" name="password" placeholder="Password"/>
      <span className="highlight"></span>
      <span className="bar"></span>
      { touched.password && errors.password && <p className="errors">{errors.password}</p> }
    </div>
    <div className="group">
      <Field type="password" name="confPassword" placeholder="Retype Password"/>
      <span className="highlight"></span>
      <span className="bar"></span>
      { touched.confPassword && errors.confPassword && <p className="errors">{errors.confPassword}</p> }
    </div>
    <button className="btn btn-oval float-right" disabled={isSubmitting}>Register</button>
    <p className="clr-both"></p>
  </Form>
)

const SignupForm = withFormik({
  mapPropsToValues({ email, password, firstName, confPassword, mentor, roleId }) {
    return {
      email: email || '',
      password: password || '',
      firstName: firstName || '',
      confPassword: confPassword,
      roleId: roleId || ''
    }
  },
  validationSchema: Yup.object().shape({
    email: Yup.string().email('*Email not valid').required('*Email is required'),
    firstName: Yup.string().required('*User Name is required'),
    password: Yup.string().min(9, '*Password must be 9 characters or longer').required('*Password is required'),
    confPassword: Yup.string().min(9, '*Password must be 9 characters or longer').required('*Please retype your password').oneOf([Yup.ref('password'), null], "Passwords don't match"),
    roleId: Yup.string().required("*Please Select Application type")
  }),
  handleSubmit(values, {resetForm, props}) {
    
    //Changes in API structure - modify request, remove above console.

    if(window.location.pathname === "/signup"){
      values.mentor = false;
    }
    else {
      values.mentor = true;
    }
    // $.ajax({
    //   type: "POST",
    //   url: 'http://52.66.139.66:8080/UserRegister',
    //   data: { email: values.email, password: values.password, firstName: values.firstName, roleId: values.roleId },
    //   success: function (data) {
    //     localStorage.setItem('authtoken', 'loggedin');
    //     window.location.href="/login";
    //     resetForm();
    //   },
    //   error: function (err) {
    //     console.log(err);
    //   }
    // });
    props.signupMethod(values);
  }
})(Signup)

export default SignupForm;
