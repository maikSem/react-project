import React from 'react';
import classes from './Friends.module.css';
import FriendItem from "./FriendItem/FriendItem";

const Friends = (props) => {

  // let friendsElement = props.state.friends.map(f => <FriendItem name={f.name}/>);

  return (
    <div className={classes.friends}>
      <h3 className={classes.friendsTitle}>Friends</h3>
      <ul className={classes.friendsList}>
        <FriendItem/>
        <FriendItem/>
        <FriendItem/>
      </ul>
    </div>
  )
}

export default Friends;
