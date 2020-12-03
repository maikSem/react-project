import React from 'react';
import classes from './DialogsItem.module.css';
import {NavLink} from "react-router-dom";

const DialogsItem = (props) => {
  return (
    <div className={classes.dialog}>
      <NavLink className={classes.dialogLink} activeClassName={classes.activeLink} to={'/dialogs/' + props.id}>{props.name}</NavLink>
    </div>
  )
}

export default DialogsItem;
