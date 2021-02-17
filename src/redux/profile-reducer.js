import {profileAPI} from '../api/api';

let ADD_POST = 'social-network/profile/ADD-POST';
let SET_USER_PROFILE = 'social-network/profile/SET_USER_PROFILE';
let SET_STATUS = 'social-network/profile/SET_STATUS';
let ADD_USER_PIC_SUCCESS = 'social-network/profile/ADD_USER_PIC_SUCCESS';

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
      case ADD_USER_PIC_SUCCESS:
      return {
        ...state,
        userProfile: {...state.userProfile, photos: action.photos}
      };
    default:
      return state;
  }
};

export const addPost = (newBodyPost) => ({type: ADD_POST, newBodyPost});
export const setUserProfile = (userProfile) => ({type: SET_USER_PROFILE, userProfile});
export const setUserStatus = (status) => ({type: SET_STATUS, status});
export const addUserPicSuccess = (photos) => ({type: ADD_USER_PIC_SUCCESS, photos});

export const getUserProfileTC = (userId) => async (dispatch) => {
  let response = await profileAPI.getProfile(userId);
  dispatch(setUserProfile(response.data));
};

export const getUserStatusTC = (userId) => async (dispatch) => {
  let response = await profileAPI.getStatus(userId)
  dispatch(setUserStatus(response.data));
};

export const updateUserStatusTC = (status) => async (dispatch) => {
  let response = await profileAPI.updateStatus(status);
  if (response.data.resultCode === 0) {
    dispatch(setUserStatus(status))
  };
};

export const saveUserPic = (file) => async (dispatch) => {
  let response = await profileAPI.addUserPic(file);
  if (response.data.resultCode === 0) {
    dispatch(addUserPicSuccess(response.data.data.photos))
  };
};



export default profileReducer;
