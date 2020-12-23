import React from 'react';
import classes from './Users.module.css';

let Users = (props) => {
  if (props.users.length === 0) {
    props.setUsers([
      {
        id: 1,
        followed: true,
        fullName: 'Misha S',
        status: 'I am boss',
        location: {city: 'Ekaterinburg', country: 'Russia'},
        userPic: 'https://cdn0.iconfinder.com/data/icons/faces-general/100/male_bald_flat-512.png'
      },
      {
        id: 2,
        followed: true,
        fullName: 'Alesya S',
        status: 'I am wife the boss',
        location: {city: 'Ekaterinburg', country: 'Russia'},
        userPic: 'https://cdn0.iconfinder.com/data/icons/faces-general/100/male_bald_flat-512.png'
      },
      {
        id: 3,
        followed: false,
        fullName: 'Pasha S',
        status: 'I am brother the boss',
        location: {city: 'Kachkanar', country: 'Russia'},
        userPic: 'https://cdn0.iconfinder.com/data/icons/faces-general/100/male_bald_flat-512.png'
      },
    ])
  }

  return (
    <ul>{
      props.users.map(u => <li key={u.id}>
        <div>
          <div>
            <img src={u.userPic} className={classes.userPhoto} alt="#"/>
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
            <div>{u.fullName}</div>
            <div>{u.status}</div>
          </span>
          <span>
            <div>{u.location.country}</div>
            <div>{u.location.city}</div>
          </span>
        </div>
      </li>)
    }</ul>
  )
}

export default Users;
