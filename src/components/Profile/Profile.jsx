import React from 'react';
import classes from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
  return (
    <main>
      <ProfileInfo userProfile={props.userProfile}/>
      <MyPostsContainer />
    </main>
  )
}


export default Profile;
