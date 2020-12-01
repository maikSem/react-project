import React from 'react';
import classes from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const Dialogs = () => {
  return (
    <div className={`${classes.dialogs}`}>
      <div className={`${classes.dialogsList}`}>
        <NavLink to='/dialogs/1' className={`${classes.dialog}`}>Alesya</NavLink>
        <NavLink to='/dialogs/2' className={`${classes.dialog}`}>Sveta</NavLink>
        <NavLink to='/dialogs/3' className={`${classes.dialog}`}>Oleg</NavLink>
        <NavLink to='/dialogs/4' className={`${classes.dialog}`}>Korney</NavLink>
        <NavLink to='/dialogs/5' className={`${classes.dialog}`}>Dima</NavLink>
      </div>
      <ul className='messages-list'>
        <li className="message">Hi</li>
        <li className="message">How are you?</li>
        <li className="message">Yahy</li>
      </ul>
    </div>
  )
}

export default Dialogs;
