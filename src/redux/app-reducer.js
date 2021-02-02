import {getAuthUserDataTC} from "./auth-reducer";

let INITIALIZED_SUCCESS = 'social-network/app/INITIALIZED_SUCCESS';

let initialState = {
  initialized: false
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZED_SUCCESS:
      return {
        ...state,
        initialized: true
      }
    default:
      return state;
  }
}

export const initializedSuccess = () => ({
  type: INITIALIZED_SUCCESS
});

export const initializeApp = () => (dispatch) => {

  let promise = dispatch(getAuthUserDataTC());

  Promise.all([promise]).then(() => {          //после того как все промисы выполнятся
      dispatch(initializedSuccess())
    }
  )
}

export default appReducer;
