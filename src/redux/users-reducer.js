import {usersAPI} from "../api/api";

let FOLLOW = 'social-network/users/FOLLOW';
let UNFOLLOW = 'social-network/users/UNFOLLOW';
let SET_USERS = 'social-network/users/SET_USERS';
let SET_CURRENT_PAGE = 'social-network/users/SET_CURRENT_PAGE';
let SET_TOTAL_USERS_COUNT = 'social-network/users/SET_TOTAL_USERS_COUNT';
let TOGGLE_IS_FETCHING = 'social-network/users/TOGGLE_IS_FETCHING';
let TOGGLE_IS_FOLLOWING_PROGRESS = 'social-network/users/TOGGLE_IS_FOLLOWING_PROGRESS';


let initialState = {
  users: [],
  pageSize: 10,
  totalUsersCount: 21,
  currentPage: 1,
  followingProgress: []
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return {...u, followed: true}
          }
          return u;
        })
      }
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return {...u, followed: false}
          }
          return u;
        })
      }
    case SET_USERS: {
      return {
        ...state, users: action.users
        // ...state, users: [...state.users, ...action.users] //Склеиваем два массива (юзеры которые были и которые пришли с экшном)
      }
    }
    case SET_CURRENT_PAGE: {
      return {
        ...state, currentPage: action.currentPage
      }
    }
    case SET_TOTAL_USERS_COUNT: {
      return {
        ...state, totalUsersCount: action.totalCount
      }
    }
    case TOGGLE_IS_FETCHING: {
      return {
        ...state, isFetching: action.isFetching
      }
    }
    case TOGGLE_IS_FOLLOWING_PROGRESS: {
      return {
        ...state,
        followingProgress: action.isFetching
          ? [...state.followingProgress, action.userId]
          : [state.followingProgress.filter(id => id != action.userId)]
      }
    }
    default:
      return state;
  }
}

export const followSuccess = (userId) => ({type: FOLLOW, userId});  // action-creater
export const unfollowSuccess = (userId) => ({type: UNFOLLOW, userId});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setTotalUsersCount = (totalCount) => ({type: SET_TOTAL_USERS_COUNT, totalCount});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
export const toggleFollowingProgress = (isFetching, userId) => ({
  type: TOGGLE_IS_FOLLOWING_PROGRESS,
  isFetching,
  userId
})

export const getUserTC = (page, pageSize) => {
  return async (dispatch) => {
    dispatch(toggleIsFetching(true));
    let data = await usersAPI.getUsers(page, pageSize);
    dispatch(toggleIsFetching(false));
    dispatch(setUsers(data.items));
    dispatch(setTotalUsersCount(data.totalCount));
  }
}

const followUnfollowFlow = async (dispatch, userId, apiMethod,actionCreator) => {
  dispatch(toggleFollowingProgress(true, userId));
  let response = await apiMethod(userId);
  if (response.data.resultCode === 0) {
      dispatch(actionCreator(userId))
    };
  dispatch(toggleFollowingProgress(false, userId));
}

export const followTC = (userId) => {
  return async (dispatch) => {
    followUnfollowFlow(dispatch, userId, usersAPI.follow.bind(userId), followSuccess);
  }
}

export const unfollowTC = (userId) => {
  return async (dispatch) => {
    followUnfollowFlow(dispatch, userId, usersAPI.unfollow.bind(userId), unfollowSuccess);
  }
}


export default usersReducer;
