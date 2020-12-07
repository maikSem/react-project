import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import classes from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  return (
    <main>
      <ProfileInfo/>
      <MyPosts posts={props.state.posts} addPost={props.addPost}/>
    </main>
  )
}

export default Profile;
