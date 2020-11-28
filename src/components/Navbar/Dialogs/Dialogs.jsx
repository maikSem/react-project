import React from 'react';
import classes from './Dialogs.module.css';

const Dialogs = () => {
  return (
    <div className={`${classes.dialogs}`}>
      <ul className={`${classes.dialogsList}`}>
        <li className={`${classes.dialog}`}>Alesya</li>
        <li className={`${classes.dialog}`}>Sveta</li>
        <li className={`${classes.dialog}`}>Oleg</li>
        <li className={`${classes.dialog}`}>Korney</li>
        <li className={`${classes.dialog}`}>Dima</li>
      </ul>
      <ul className='messages-list'>
        <li className="message">Hi</li>
        <li className="message">How are you?</li>
        <li className="message">Yahy</li>
      </ul>
    </div>
  )
}

export default Dialogs;
