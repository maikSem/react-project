import React from 'react';
import classes from './Message.module.css';
import {Field, reduxForm} from "redux-form";

const AddMessageForm = (props) => {
  return (
    <form action="#" onSubmit={props.handleSubmit}>
      <div>
        <Field component={'textarea'} name={'newMessageBody'}></Field>
      </div>
      <div>
        <button>Send message</button>
      </div>
    </form>
  )
}

const MessageReduxForm  = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm);

export default MessageReduxForm;
