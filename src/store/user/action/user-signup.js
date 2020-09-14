import {
  USER_SIGNUP_REQUEST,
  USER_SIGNUP_SUCCESS,
  USER_SIGNUP_FAILURE,
} from '@/constants';

export const userSignupReq = (email, password, firstName, lastName) => ({
  type: USER_SIGNUP_REQUEST,
  payload: {
    email,
    password,
    firstName,
    lastName,
  },
});

export const userSignupSuccess = data => ({
  type: USER_SIGNUP_SUCCESS,
  payload: data,
});

export const userSignupFailure = error => ({
  type: USER_SIGNUP_FAILURE,
  payload: error,
});
