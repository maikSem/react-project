import React from 'react';
import classes from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

let dialogsData = [
  {id: 1, name: 'Misha'},
  {id: 2, name: 'Alesya'},
  {id: 3, name: 'Ksenya'},
  {id: 4, name: 'Key'},
  {id: 5, name: 'Oleg'},
  {id: 6, name: 'Sergey'}
]

let messagesData = [
  {id: 1, message: 'Hi!'},
  {id: 2, message: 'How are you?'},
  {id: 3, message: 'Yahoo'},
  {id: 4, message: 'Yo!'},
  {id: 5, message: 'Wheare you?'},
  {id: 6, message: 'Yo!'}
]

const DialogsItem = (props) => {
  return (
    <div className={classes.dialog}>
      <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
    </div>
  )
}

const Message = (props) => {
  return (
    <div className={classes.message}>{props.message}</div>
  )
}

const Dialogs = (props) => {
  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>
        <DialogsItem name={dialogsData[0].name} id={dialogsData[0].id}/>
        <DialogsItem name={dialogsData[1].name} id={dialogsData[1].id}/>
        <DialogsItem name={dialogsData[2].name} id={dialogsData[2].id}/>
        {/*<DialogsItem name='Alesya' id='2'/>*/}
        {/*<DialogsItem name='Ksenya' id='3'/>*/}
        {/*<DialogsItem name='Key' id='4'/>*/}
        {/*<DialogsItem name='Oleg' id='5'/>*/}
        {/*<DialogsItem name='Sergey' id='6'/>*/}
      </div>
      <div className='messages-list'>
        <Message message={messagesData[0].message}/>
        <Message message={messagesData[1].message}/>
        {/*<Message message='How are you?'/>*/}
        {/*<Message message='Yahoo'/>*/}
        {/*<Message message='Yo!'/>*/}
        {/*<Message message='Wheare you?'/>*/}
      </div>
    </div>
  )
}

export default Dialogs;
