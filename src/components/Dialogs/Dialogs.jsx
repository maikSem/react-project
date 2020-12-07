import React from 'react';
import classes from './Dialogs.module.css';
import DialogsItem from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

  let dialogsElements = props.state.dialogs.map(d => <DialogsItem name={d.name} id={d.id}/>);

  let messagesElements = props.state.messages.map(m => <Message message={m.message}/>);

  let newMessageElement = React.createRef();

  let addMessage = () => {
    let textMessage = newMessageElement.current.value;
    alert (textMessage);
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
        <textarea ref={newMessageElement}></textarea>
      </div>
      <div>
        <button onClick={addMessage}>Add message</button>
      </div>
    </div>
  )
}

export default Dialogs;