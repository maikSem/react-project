import React from 'react';
import {addMessageCreator, updateNewMessageTextCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
  let state = props.store.getState();

  let addMessage = () => {
    props.store.dispatch(addMessageCreator());
  }

  let onMessageChange = (text) => {
    let action = updateNewMessageTextCreator(text);
    props.store.dispatch(action);
  }

  return (<Dialogs addMessage={addMessage}
                   updateNewMessageTextCreator={onMessageChange}
                   dialogsPage={state.dialogsPage}
  />)

}

export default DialogsContainer;
