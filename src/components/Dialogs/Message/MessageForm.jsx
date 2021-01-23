import React from 'react';
import classes from './Message.module.css';
import {Field, reduxForm} from "redux-form";
import {FormElement} from "../../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../../utils/validators/validators";

const maxLength5 = maxLengthCreator(5);
const Textarea = FormElement('textarea');

const AddMessageForm = (props) => {
  return (
    <form action="#" onSubmit={props.handleSubmit}>
      <div>
        <Field component={Textarea} name={'newMessageBody'} validate={[required, maxLength5]}></Field>
      </div>
      <div>
        <button>Send message</button>
      </div>
    </form>
  )
}

const MessageReduxForm  = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm);

export default MessageReduxForm;
