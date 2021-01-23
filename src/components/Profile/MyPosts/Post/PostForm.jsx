import React from 'react';
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../../utils/validators/validators";
import {FormElement} from "../../../common/FormsControls/FormsControls";

const maxLength10 = maxLengthCreator(10);
const Textarea = FormElement('textarea');

const AddNewPostForm = (props) => {
  return (
    <form action="#" onSubmit={props.handleSubmit}>
      <div>
        <Field component={Textarea}
               name='newBodyPost'
               validate={[required, maxLength10]}
        ></Field>
      </div>
      <div>
        <button>Add post</button>
      </div>
    </form>
  )
}

const AddNewPostReduxForm  = reduxForm({form: 'newPost'})(AddNewPostForm);

export default AddNewPostReduxForm;
