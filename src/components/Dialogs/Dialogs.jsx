import React from 'react';
import classes from './Dialogs.module.css';
import DialogsItem from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";
import MessageReduxForm from "./Message/MessageForm";

const Dialogs = (props) => {
  let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogsItem name={d.name} id={d.id} key={d.id}/>);

  let messagesElements = props.dialogsPage.messages.map(m => <Message message={m.message} key={m.id}/>);

  const addNewMessage = (values) => {
    props.addMessage(values.newMessageBody)
  }

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>
        {dialogsElements}
      </div>
      <div className='messages-list'>
        {messagesElements}
      </div>
      <MessageReduxForm onSubmit={addNewMessage}/>
    </div>
  )
}

export default Dialogs;
