import React from 'react';
import Paginator from "../common/Paginator/Paginator";
import User from "./User/User";

let Users = (props) => {

  return (
    <div>
      <Paginator totalItemsCount={props.totalUsersCount}
                 pageSize={props.pageSize}
                 currentPage={props.currentPage}
                 onPageChanged={props.onPageChanged}
      />
      <ul>
        {props.users.map(u => <User user={u}
                                    followingProgress={props.followingProgress}
                                    unfollowTC={props.unfollowTC}
                                    followTC={props.followTC}
                                    key={u.id}/>)}
      </ul>
    </div>
  )
}

export default Users;
