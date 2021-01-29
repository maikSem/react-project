import React from 'react';
import {followTC, getUserTC, setCurrentPage, toggleFollowingProgress, unfollowTC} from '../../redux/users-reducer';
import {connect} from 'react-redux';
import Users from './Users';
import Preloader from "../common/Preloader/Preloader";
import {
  getCurrentPage, getFollowingProgress,
  getIsFetching,
  getPageSize,
  getTotalUsersCount,
  getUsers
} from "../../redux/users-selectors";


class UsersContainer extends React.Component {

  componentDidMount() {
    this.props.getUserTC(this.props.currentPage, this.props.pageSize);
  }

  onPageChanged = (pageNumber) => {
    this.props.getUserTC(pageNumber, this.props.pageSize);
    this.props.setCurrentPage(pageNumber);
  }

  render() {
    return <>
      {this.props.isFetching ? <Preloader/> : null}
      <Users totalUsersCount={this.props.totalUsersCount}
             pageSize={this.props.pageSize}
             currentPage={this.props.currentPage}
             onPageChanged={this.onPageChanged}
             users={this.props.users}
             followingProgress={this.props.followingProgress}
             followTC={this.props.followTC}
             unfollowTC={this.props.unfollowTC}
      />
    </>
  }
}

let mapStateToProps = (state) => {
  return {
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingProgress: getFollowingProgress(state)
  }
}

// let mapDispatchToProps = (dispatch) => {
//   return ({
//     followSuccess: (usersId) => {
//       dispatch(followAC(usersId));
//     },
//     unfollowSuccess: (usersId) => {
//       dispatch(unfollowAC(usersId));
//     },
//     setUsers: (users) => {
//       dispatch(setUsersAC(users));
//     },
//     setCurrentPage: (pageNumber) => {
//       dispatch(setCurrentPageAC(pageNumber))
//     },
//     setTotalUsersCount: (totalCount) => {
//       dispatch(setTotalUsersCountAC(totalCount))
//     },
//     toggleIsFetching: (isFetching) => {
//       dispatch(toggleIsFetchingAC(isFetching))
//     }
//   })
// }

export default connect(mapStateToProps, {
  setCurrentPage,
  toggleFollowingProgress,
  getUserTC,
  followTC,
  unfollowTC
})(UsersContainer);
