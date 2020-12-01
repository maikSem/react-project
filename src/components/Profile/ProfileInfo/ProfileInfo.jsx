import React from 'react';
import classes from './ProfileInfo.module.css';

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img src='https://images.indianexpress.com/2020/05/the-walking-dead-759.jpg' alt='#'/>
      </div>
      <div className={classes.descriptionBlock}>
        ava + description
      </div>
    </div>
  )
}

export default ProfileInfo;
