import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILURE,
} from '@/constants';

export const userLoginReq = (email, password) => ({
  type: USER_LOGIN_REQUEST,
  payload: {
    email,
    password,
  },
});

export const userLoginSuccess = data => ({
  type: USER_LOGIN_SUCCESS,
  payload: data,
});

export const userLoginFailure = error => ({
  type: USER_LOGIN_FAILURE,
  payload: error,
});
