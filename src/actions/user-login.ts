import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILURE,
} from '@/constants';
import { UserLoginTypes } from './types';

export const userLoginReq = (
  email: string,
  password: string,
): UserLoginTypes => ({
  type: USER_LOGIN_REQUEST,
  payload: {
    email,
    password,
  },
});

export const userLoginSuccess = (data: object): UserLoginTypes => ({
  type: USER_LOGIN_SUCCESS,
  payload: data,
});

export const userLoginFailure = (error: string): UserLoginTypes => ({
  type: USER_LOGIN_FAILURE,
  payload: error,
});
