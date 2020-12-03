import React from 'react';
import classes from './Dialogs.module.css';
import DialogsItem from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

  let dialogs = [
    {id: 1, name: 'Misha'},
    {id: 2, name: 'Alesya'},
    {id: 3, name: 'Ksenya'},
    {id: 4, name: 'Key'},
    {id: 5, name: 'Oleg'},
    {id: 6, name: 'Sergey'}
  ]

  let messages = [
    {id: 1, message: 'Hi!'},
    {id: 2, message: 'How are you?'},
    {id: 3, message: 'Yahoo'},
    {id: 4, message: 'Yo!'},
    {id: 5, message: 'Wheare you?'},
    {id: 6, message: 'Yo!'}
  ]

  let dialogsElements = dialogs.map(d => <DialogsItem name={d.name} id={d.id}/>);

  let messagesElements = messages.map(m => <Message message={m.message}/>);

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>
        {dialogsElements}
      </div>
      <div className='messages-list'>
        {messagesElements}
      </div>
    </div>
  )
}

export default Dialogs;
