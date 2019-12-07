import React from 'react';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import '../SignupForm/signupForm.scss';
import './loginForm.scss';

const Login = ({
  values,
  errors,
  touched,
  isSubmitting,
  classes,
  showPassword,
  enteredEmail
}) => (
  <Form className={"mx-auto " +classes}>
    { showPassword ? <div className={"mx-auto login"+ (showPassword ? '': 'display-none')}>
      <div className="password-heading">
        <img className="rounded-box" src="https://lh3.googleusercontent.com/-eJruhaTP9ig/AAAAAAAAAAI/AAAAAAAAAAA/APUIFaPneMrzUY3vmJfRrgn0_uOzqaO7fA/mo/photo.jpg?sz=46" />
        <h5 className="font-weight-bold">Hey Vikas, please<br/> enter your</h5>
      </div>
      <label><h5 className="font-weight-bold">Password</h5></label>
      <div className="group">
        <Field type="password" name="password" placeholder="Password"/>
        { touched.password && errors.password && <p className="errors">{errors.password}</p> }
      </div>
        <p className="remember-me">
          <span>Remember me</span>
          <input type="checkbox" id="remember-me"/>
          <label className="check-box" htmlFor="remember-me"></label>
        </p>
      <button  disabled={isSubmitting} className="btn btn-oval float-right">Login</button>
      <p className="clear-both"></p>
    </div> : <div className="mx-auto">
      <label><h5 className="font-weight-bold">User Name</h5></label>
      <div className="group">
        <Field type="email" name="email" placeholder="Ex: abc@def.com"/>
        { touched.email && errors.email && <p className="errors">{errors.email}</p> }
      </div>
        <p className="remember-me">
          <span>Remember me</span>
          <input type="checkbox" id="remember-me-eml"/>
          <label className="check-box" htmlFor="remember-me-eml"></label>
        </p>
      <button disabled={isSubmitting} className="play-button" onClick={e => enteredEmail(e, values.email) } ><i className="fa fa-play" /></button>
    </div> 
    }
  </Form>
)

const LoginForm = withFormik({
  mapPropsToValues({ email, password, classes, showPassword}) {
    return {
      email: email || '',
      password: password || '',
      classes: classes,
      showPassword: showPassword
    }
  },
  validationSchema: props => {
    const validObject = { email: Yup.string().email('Email not valid').required('*Email is required') };
    if (props.showPassword) {
      validObject['password'] = Yup.string().min(9, '*Password must be 9 characters or longer').required('*Password is required');
    }
    return Yup.object().shape(validObject);
  },
  handleSubmit(values, {resetForm, props, setErrors}) {
    props.loginMethod(values);
  }
})(Login)

export default LoginForm;