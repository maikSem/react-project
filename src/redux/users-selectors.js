import {createSelector} from "reselect";

const getUsersSelector = (state) => {      // примитивный селектор
  return state.usersPage.users;
}

export const getUsers = createSelector(getUsersSelector, (users) => {
  return users.filter(u => true);   // фэйковая фильтрация
})

export const getPageSize = (state) => {
  return state.usersPage.pageSize;
}

export const getTotalUsersCount = (state) => {
  return state.usersPage.totalUsersCount;
}

export const getCurrentPage = (state) => {
  return state.usersPage.currentPage;
}

export const getIsFetching = (state) => {
  return state.usersPage.isFetching;
}

export const getFollowingProgress = (state) => {
  return state.usersPage.followingProgress;
}
