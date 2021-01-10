import React from 'react';
import classes from './Users.module.css';
import userPhoto from '../../assets/images/userpic.png'
import {NavLink} from "react-router-dom";
import * as axios from "axios";
import {usersAPI} from "../../api/api";
import {unfollowTC} from "../../redux/users-reducer";

let Users = (props) => {

  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);  //округляем в большую сторону

  let pages = [];

  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <div>
      <div>
        {pages.map(p => {
          return <span className={props.currentPage === p && classes.selectedPage}
                       onClick={() => {
                         props.onPageChanged(p)
                       }}>
              {p}
            </span>
        })}
      </div>
      <ul>
        {props.users.map(u => <li key={u.id}>
          <div>
            <NavLink to={'/profile/' + u.id}>
              <div>
                <img src={u.photos.small || userPhoto} className={classes.userPhoto} alt="#"/>
              </div>
            </NavLink>
            <div>
              {u.followed
                ? <button disabled={props.followingProgress.some(id => id === u.id)} onClick={() => {
                  props.unfollowTC(u.id)}
                }>Unfollow</button>
                : <button disabled={props.followingProgress.some(id => id === u.id)} onClick={() => {
                  props.followTC(u.id)}
                }>Follow</button>}
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
    </div>
  )
}

export default Users;
