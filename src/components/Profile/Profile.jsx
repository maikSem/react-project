import React from 'react';
import classes from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {

  return (
    <main>
      <ProfileInfo userProfile={props.userProfile}
                   updateUserStatusTC={props.updateUserStatusTC}
                   status={props.status}/>
      <MyPostsContainer />
    </main>
  )
}


export default Profile;
