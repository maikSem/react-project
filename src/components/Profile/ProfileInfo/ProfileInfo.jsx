import React from 'react';
import classes from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusHook from "./ProfileStatus/ProfileStatusHook";
import Userpic from '../../../assets/images/userpic.png';

const ProfileInfo = (props) => {

  if (!props.userProfile) {

    return <Preloader/>
  };

  let userSocialContactsArr = Object.values(props.userProfile.contacts).filter(el => {
    return el != null
  });

  let userContacts = userSocialContactsArr.map(c => <li><a href={`https://` + c}>{c}</a></li>);

  const onChangeUserPic = (e) => {
    if (e.target.files.length) {
      props.saveUserPic(e.target.files[0]);
    }
  };

  return (
    <div>
      <div className={classes.descriptionBlock}>
        <img src={props.userProfile.photos.large || Userpic} alt='Фото пользователя'/>
        <div>
          {props.isOwner &&
          <input type='file' onChange={onChangeUserPic}></input>}
        </div>
        <ProfileStatusHook status={props.status}
                           updateUserStatusTC={props.updateUserStatusTC}
        />
        <p>{props.userProfile.fullName}</p>
        <p>{props.userProfile.aboutMe}</p>
        <p>Поиск работы: {props.userProfile.lookingForAJobDescription || 'Не нахожусь в поиске работы'}</p>
        <ul>
          {userContacts}
        </ul>
      </div>
    </div>
  )
}

export default ProfileInfo;
