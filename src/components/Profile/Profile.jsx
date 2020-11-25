import React from 'react';
import MyPosts from './MyPosts/MyPosts';
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
      <MyPosts />
    </main >
  )
}

export default Profile;
