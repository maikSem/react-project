import React from 'react';
import classes from './DialogsItem.module.css';
import {NavLink} from "react-router-dom";

const DialogsItem = (props) => {
  return (
    <div className={classes.dialog}>
      <img className={classes.iconUser} src='https://c7.hotpng.com/preview/800/479/627/computer-icons-old-age-man-icon.jpg'/>
      <NavLink className={classes.dialogLink} activeClassName={classes.activeLink} to={'/dialogs/' + props.id}>{props.name}</NavLink>
    </div>
  )
}

export default DialogsItem;
