import React, {useEffect, useState} from 'react';

const ProfileStatusHook = (props) => {
 let [editMode, setEditMode] = useState(false);
 let [status, setStatus] = useState(props.status);

 useEffect(() => {
   setStatus(props.status);
 }, [props.status]);    //синхронизироваться надо всегда когда изменится status

 const activateEditMode = () => {
   setEditMode(true)
 };

 const deactivate = () => {
   setEditMode(false);
   props.updateUserStatusTC(status);
 }

 const onStatusChange = (e) => {
      setStatus(e.currentTarget.value)
    }

  return (
    <div>
      {!editMode &&
      <div>
        <span onClick={activateEditMode}>{props.status || 'No status'}</span>
      </div>
      }
      {editMode &&
      <div>
        <input onChange={onStatusChange} onBlur={deactivate} autoFocus={true} value={status}/>
      </div>
      }
    </div>)
}

export default ProfileStatusHook;
