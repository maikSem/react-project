import React from 'react';
import classes from './Users.module.css';
import userPhoto from '../../assets/images/userpic.png'

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
    </div>
  )
}

export default Users;
