import {profileAPI} from "../api/api";

let ADD_POST = 'ADD-POST';
let SET_USER_PROFILE = 'SET_USER_PROFILE';
let SET_STATUS = 'SET_STATUS'

let initialState = {
  posts: [
    {id: 1, post: 'This is my first post!', likesCount: 12},
    {id: 2, post: 'This is my second post', likesCount: 16},
    {id: 3, post: 'This is my last post', likesCount: 10}
  ],
  userProfile: null,
  status: ''
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 3,
        post: action.newBodyPost,
        likesCount: 10
      }
      return {        // редусеры тоже чистые функции, они не должны изменять данные которые в них приходят, поэтому мы копируем state который в редусер приходит!
        ...state,
        posts: [...state.posts, newPost] // таким образом мы добавляем новый элемент в массив, где newPost является новым элементом
      };
    case SET_USER_PROFILE:
      return {
        ...state,
        userProfile: action.userProfile
      };
    case SET_STATUS:
      return {
        ...state,
        status: action.status
      };
    default:
      return state;
  }
}

export const addPost = (newBodyPost) => ({type: ADD_POST, bodyNewPost: newBodyPost});
export const setUserProfile = (userProfile) => ({type: SET_USER_PROFILE, userProfile});
export const setUserStatus = (status) => ({type: SET_STATUS, status});

export const getUserProfileTC = (userId) => {
  return (dispatch) => {
    profileAPI.getProfile(userId).then(response => {
      dispatch(setUserProfile(response.data))
    })
  }
}

export const getUserStatusTC = (userId) => {
  return (dispatch) => {
    profileAPI.getStatus(userId).then(response => {
      dispatch(setUserStatus(response.data))
    })
  }
}

export const updateUserStatusTC = (status) => {
  return (dispatch) => {
    profileAPI.updateStatus(status).then(response => {
      if (response.data.resultCode === 0) {
        dispatch(setUserStatus(status))
      }
    })
  }
}


export default profileReducer;
