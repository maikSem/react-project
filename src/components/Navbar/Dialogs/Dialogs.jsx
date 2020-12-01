import React from 'react';
import classes from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

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

const Dialogs = () => {
  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>
        <DialogsItem name='Misha' id='1'/>
        <DialogsItem name='Alesya' id='2'/>
        <DialogsItem name='Ksenya' id='3'/>
        <DialogsItem name='Key' id='4'/>
        <DialogsItem name='Oleg' id='5'/>
        <DialogsItem name='Sergey' id='6'/>
      </div>
      <div className='messages-list'>
       <Message message='Hi!'/>
       <Message message='How are you?'/>
       <Message message='Yahoo'/>
       <Message message='Yo!'/>
       <Message message='Wheare you?'/>
      </div>
    </div>
  )
}

export default Dialogs;
