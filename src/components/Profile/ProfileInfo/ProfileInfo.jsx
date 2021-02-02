import React from 'react';
import classes from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusHook from "./ProfileStatus/ProfileStatusHook";

const ProfileInfo = (props) => {
  if (!props.userProfile) {

    return <Preloader/>
  }
  let userSocialContactsArr = Object.values(props.userProfile.contacts).filter(el => {
    return el != null
  });
  let userContacts = userSocialContactsArr.map(c => <li><a href={`https://` + c}>{c}</a></li>);

  return (
    <div>
      <div>
        <img src='https://images.indianexpress.com/2020/05/the-walking-dead-759.jpg' alt='#'/>
      </div>
      <ProfileStatusHook status={props.status}
                         updateUserStatusTC={props.updateUserStatusTC}
      />
      <div className={classes.descriptionBlock}>
        <img src={props.userProfile.photos.small} alt=""/>
        <p>{props.userProfile.fullName}</p>
        <p>{props.userProfile.aboutMe}</p>
        <p>Поиск работы: {props.userProfile.lookingForAJobDescription}</p>
        <ul>
          {userContacts}
        </ul>
      </div>
    </div>
  )
}

export default ProfileInfo;
