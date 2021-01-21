import React from 'react';
import {Field, reduxForm} from "redux-form";

const AddNewPostForm = (props) => {
  return (
    <form action="#" onSubmit={props.handleSubmit}>
      <div>
        <Field component={'textarea'} name={'newBodyPost'}></Field>
      </div>
      <div>
        <button>Add post</button>
      </div>
    </form>
  )
}

const AddNewPostReduxForm  = reduxForm({form: 'newPost'})(AddNewPostForm);

export default AddNewPostReduxForm;
