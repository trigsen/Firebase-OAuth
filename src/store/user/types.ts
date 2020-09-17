import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILURE,
  USER_SIGNOUT_SUCCESS,
  USER_SIGNOUT_FAILURE,
  USER_SIGNOUT_REQUEST,
  USER_SIGNUP_REQUEST,
  USER_SIGNUP_SUCCESS,
  USER_SIGNUP_FAILURE,
} from '@/constants';

interface LoginReq {
  type: typeof USER_LOGIN_REQUEST;
  payload: User;
}

interface LoginSuccess {
  type: typeof USER_LOGIN_SUCCESS;
  payload: User;
}

interface LoginFailure {
  type: typeof USER_LOGIN_FAILURE;
  payload: string;
}

interface SignOutReq {
  type: typeof USER_SIGNOUT_REQUEST;
  payload?: string;
}

interface SignOutSuccess {
  type: typeof USER_SIGNOUT_SUCCESS;
  payload?: string;
}

interface SignOutFailure {
  type: typeof USER_SIGNOUT_FAILURE;
  payload: string;
}

interface SignUpReq {
  type: typeof USER_SIGNUP_REQUEST;
  payload: User;
}

interface SignUpSuccess {
  type: typeof USER_SIGNUP_SUCCESS;
  payload: User;
}

interface SignUpFailure {
  type: typeof USER_SIGNUP_FAILURE;
  payload: string;
}

export interface User {
  email?: string;
  password?: string;
  firstName?: string;
  lastName?: string;
}

export interface UserReducer {
  request: boolean;
  error: string | object;
  data: User;
}

export type UserLoginTypes = LoginSuccess | LoginFailure | LoginReq;
export type UserSignOutTypes = SignOutSuccess | SignOutFailure | SignOutReq;
export type UserSignUpTypes = SignUpSuccess | SignUpFailure | SignUpReq;
