import React from 'react';
import {Field, reduxForm} from "redux-form";
import {FormElement} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import classes from './../common/FormsControls/FormsControls.module.css'

const Input = FormElement('input');

const LoginForm = ({handleSubmit, error}) => {
  return (
    <form action='#' onSubmit={handleSubmit}>
      <div>
        <Field component={Input} name={'email'} type={'text'} placeholder={'Email'} validate={[required]}/>
      </div>
      <div>
        <Field component={Input} name={'password'} type={'password'} placeholder={'Password'} validate={[required]}/>
      </div>
      <div>
        <Field component={Input} name={'rememberMe'} type={'checkbox'}/> remember me
      </div>
      {error && <div className={classes.formSummaryError}>
        {error}
      </div>}
      <div>
        <button type={'submit'}>Login</button>
      </div>
    </form>
  )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);  //container-form

const Login = (props) => {

  const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe);
  }

  if (props.isAuth) {
    return <Redirect to={'/profile'}/>
  }

  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit}/>
    </div>
  )
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, {login})(Login);
