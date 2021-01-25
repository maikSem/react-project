import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";

let SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.payload,
        isAuth: true
      }
    default:
      return state;
  }
}

export const setAuthUserData = (userId, email, login, isAuth) => ({
  type: SET_USER_DATA,
  payload: {userId, email, login, isAuth}
});  // action-creater

export const getAuthUserDataTC = () => {
  return (dispatch) => {
    return authAPI.authUserData().then(response => {
        if (response.data.resultCode === 0) {
          let {id, email, login} = response.data.data;
          dispatch(setAuthUserData(id, email, login, true));
        }
      }
    );
  }
}

export const login = (email, password, rememberMe) => {
  return (dispatch) => {
    authAPI.login(email, password, rememberMe).then(response => {
        if (response.data.resultCode === 0) {
          dispatch(getAuthUserDataTC());
        } else {
          let messageError = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error';
          dispatch(stopSubmit('login', {_error: messageError}))
        }
      }
    );
  }
}

export const logout = () => {
  return (dispatch) => {
    authAPI.logout().then(response => {
        if (response.data.resultCode === 0) {
          dispatch(setAuthUserData(null, null, null, false));
        }
      }
    );
  }
}


export default authReducer;
