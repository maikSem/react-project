import React from 'react';
import classes from './Profile.module.css';

const Profile = () => {
  return (
    <main className={classes.profile}>
      <div>
        <img src="" alt="#" />
      </div>
      <div>
        ava + description
      </div>
      <div>
        My posts
        <div>
          New post
        </div>
        <ul>
          <li>post 1</li>
          <li>post 2</li>
          <li>post 3</li>
          <li>post 4</li>
        </ul>
      </div>
    </main >
  )
}

export default Profile;
