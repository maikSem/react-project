import React from 'react';
import classes from './Dialogs.module.css';
import DialogsItem from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";
import {Redirect} from "react-router-dom";

const Dialogs = (props) => {
  let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogsItem name={d.name} id={d.id} key={d.id}/>);

  let messagesElements = props.dialogsPage.messages.map(m => <Message message={m.message} key={m.id}/>);

  let newMessageElement = React.createRef();

  let onAddMessage = () => {
    props.addMessage();
  }

  let onMessageChange = () => {
    let text = newMessageElement.current.value;
    props.updateNewMessageText(text);
  }

  // if (!props.isAuth) return <Redirect to={'/login'}/>;

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
        <button onClick={onAddMessage}>Send message</button>
      </div>
    </div>
  )
}

export default Dialogs;
