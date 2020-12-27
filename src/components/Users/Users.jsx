import React from 'react';
import classes from './Users.module.css';
import * as axios from "axios";
import userPhoto from '../../assets/images/userpic.png'

let Users = (props) => {
  let getUsers = () => {
    if (props.users.length === 0) {
      axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
        props.setUsers(response.data.items);
      });
    }
  }

  return (
    <ul>
      <button onClick={getUsers}>Get users</button>
      {props.users.map(u => <li key={u.id}>
      <div>
      <div>
      <img src={u.photos.small || userPhoto} className={classes.userPhoto} alt="#"/>
      </div>
      <div>
      {u.followed
        ? <button onClick={() => {
          props.unfollow(u.id)
        }}>Unfollow</button>
        : <button onClick={() => {
          props.follow(u.id)
        }}>Follow</button>}
      </div>
      </div>
      <div>
      <span>
      <div>{u.name}</div>
      <div>{u.status}</div>
      </span>
      <span>
      <div>{"u.location.country"}</div>
      <div>{"u.location.city"}</div>
      </span>
      </div>
      </li>)
    }</ul>
  )
}

export default Users;
