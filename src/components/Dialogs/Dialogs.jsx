import React from 'react';
import classes from './Dialogs.module.css';
import DialogsItem from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

  let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogsItem name={d.name} id={d.id}/>);

  let messagesElements = props.dialogsPage.messages.map(m => <Message message={m.message}/>);

  let newMessageElement = React.createRef();

  let addMessage = () => {
    props.addMessage()
  }

  let onMessageChange = () => {
    let text = newMessageElement.current.value;
    props.updateNewMessageText(text);
  }

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>
        {dialogsElements}
      </div>
      <div className='messages-list'>
        {messagesElements}
      </div>
      <div>
        <textarea onChange={onMessageChange} ref={newMessageElement} value={props.dialogsPage.newMessageText}/>
      </div>
      <div>
        <button onClick={addMessage}>Add message</button>
      </div>
    </div>
  )
}

export default Dialogs;
