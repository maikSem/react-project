import React from 'react';
import {
  followSuccess,
  followTC,
  getUserTC,
  setCurrentPage,
  toggleFollowingProgress,
  unfollowSuccess, unfollowTC
} from '../../redux/users-reducer';
import {connect} from 'react-redux';
import Users from './Users';
import Preloader from "../common/Preloader/Preloader";


class UsersContainer extends React.Component {

  componentDidMount() {
    this.props.getUserTC(this.props.currentPage, this.props.pageSize);
  }

  onPageChanged = (pageNumber) => {
    this.props.getUserTC(pageNumber, this.props.pageSize);
    // this.props.toggleIsFetching(true);
    this.props.setCurrentPage(pageNumber);
    // usersAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
    //   this.props.toggleIsFetching(false);
    //   this.props.setUsers(data.items);
    // });
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
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingProgress: state.usersPage.followingProgress
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
