import React from 'react';
import classes from './FriendItem.module.css';

const FriendItem = (props) => {
  return (
    <li className={classes.friendItem}>
      {/*<img className={classes.userPic} src={props.userpic}/>*/}
      {/*<p>{props.name}</p>*/}
      <p>NAME</p>
    </li>
  )
}

export default FriendItem;
