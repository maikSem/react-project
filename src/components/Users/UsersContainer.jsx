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
      <Users {...this.props}
             onPageChanged={this.onPageChanged}
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

export default connect(mapStateToProps, {
  setCurrentPage,
  toggleFollowingProgress,
  getUserTC,
  followTC,
  unfollowTC
})(UsersContainer);
