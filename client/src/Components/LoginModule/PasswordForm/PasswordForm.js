import React from 'react';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import '../SignupForm/signupForm.scss';
import './loginForm.scss';


const Password = ({
  values,
  errors,
  touched,
  isSubmitting
}) => (
  <Form className="login-form mx-auto">
      <div className="mx-auto">
        <h4 className="">Hey Surya Please Enter your password</h4>
        <Field type="password" name="password" placeholder="Password"/>
        { touched.password && errors.password && <p>{errors.password}</p> }
      </div>
      <label className="mx-5">
        Remember me
        <Field type="checkbox" name="remember" checked={values.remember}/>
      </label>
      <button className="btn btn-oval float-right" disabled={isSubmitting}>Register</button>
  </Form>
)

const PasswordForm = withFormik({
  mapPropsToValues({password, remember}) {
    return {
      password: password || '',
      remember: remember || true
    }
  },
  validationSchema: Yup.object().shape({
    password: Yup.string().min(9, '*Password must be 9 characters or longer').required('*Password is required')
  }),
  handleSubmit(values, {resetForm}) {
        console.log(values);
        resetForm();
  }
})(Password)

export default PasswordForm;
