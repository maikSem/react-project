import React from 'react';
import {Field, reduxForm} from "redux-form";
import {FormElement} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";

const Input = FormElement('input');

const LoginForm = (props) => {
  return (
    <form action='#' onSubmit={props.handleSubmit}>
      <div>
        <Field component={Input} name={'login'} type={'text'} placeholder={'Login'} validate={[required]}/>
      </div>
      <div>
        <Field component={Input} name={'password'} type={'text'} placeholder={'Password'} validate={[required]}/>
      </div>
      <div>
        <Field component={Input} name={'rememberMe'} type={'checkbox'}/> remember me
      </div>
      <div>
        <button type={'submit'}>Login</button>
      </div>
    </form>
  )
}

const LoginReduxForm  = reduxForm({form: 'login'})(LoginForm);  //container-form

const Login = (props) => {

  const onSubmit = (formData) => {
    console.log(formData);
  }

  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit}/>
    </div>
  )

}

export default Login;
