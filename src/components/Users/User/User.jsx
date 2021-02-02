import React from 'react';
import classes from '.././Users.module.css';
import userPhoto from '../../../assets/images/userpic.png'
import {NavLink} from "react-router-dom";

let User = ({user, followingProgress, unfollowTC, followTC}) => {

  return (
    <div>
      <li>
        <div>
          <NavLink to={'/profile/' + user.id}>
            <div>
              <img src={user.photos.small || userPhoto} className={classes.userPhoto} alt="#"/>
            </div>
          </NavLink>
          <div>
            {user.followed
              ? <button disabled={followingProgress.some(id => id === user.id)} onClick={() => {
                unfollowTC(user.id)
              }
              }>Unfollow</button>
              : <button disabled={followingProgress.some(id => id === user.id)} onClick={() => {
                followTC(user.id)
              }
              }>Follow</button>}
          </div>
        </div>
        <div>
          <span>
          <div>{user.name}</div>
          <div>{user.status}</div>
          </span>
          {/*      <span>*/}
          {/*<div>{"user.location.country"}</div>*/}
          {/*<div>{"user.location.city"}</div>*/}
          {/*</span>*/}
        </div>
      </li>
    </div>
  )
}

export default User;
