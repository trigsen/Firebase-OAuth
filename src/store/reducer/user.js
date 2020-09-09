import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILURE,
  USER_SIGNUP_REQUEST,
  USER_SIGNUP_SUCCESS,
  USER_SIGNUP_FAILURE,
  USER_SIGNOUT_SUCCESS,
  USER_SIGNOUT_FAILURE,
  USER_SIGNOUT_REQUEST,
  USER_LOCAL_STORAGE,
} from '@/constants';

const initialState = {
  request: false,
  error: '',
  data: localStorage.getItem(USER_LOCAL_STORAGE)
    ? JSON.parse(localStorage.getItem(USER_LOCAL_STORAGE))
    : '',
};

const user = (state = initialState, { type, payload }) => {
  switch (type) {
    case USER_LOGIN_REQUEST:
    case USER_SIGNUP_REQUEST:
    case USER_SIGNOUT_REQUEST:
      return {
        ...state,
        request: true,
      };
    case USER_LOGIN_SUCCESS:
    case USER_SIGNUP_SUCCESS:
      return {
        ...state,
        data: payload,
        request: false,
        error: '',
      };
    case USER_SIGNOUT_SUCCESS:
      return {
        ...state,
        data: '',
        error: '',
      };
    case USER_LOGIN_FAILURE:
    case USER_SIGNUP_FAILURE:
    case USER_SIGNOUT_FAILURE:
      return {
        ...state,
        error: payload,
        request: false,
      };
    default:
      return state;
  }
};

export default user;
