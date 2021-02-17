import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {Redirect} from "react-router-dom";

const Profile = props => {

  if (!props.isAuth) {
    return <Redirect to={'/login'}/>
  }

  return (
    <main>
      <ProfileInfo userProfile={props.userProfile}
                   updateUserStatusTC={props.updateUserStatusTC}
                   status={props.status}
                   isOwner={props.isOwner}
                   saveUserPic={props.saveUserPic}
      />
      <MyPostsContainer />
    </main>
  )
};


export default Profile;
