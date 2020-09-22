import {
  USER_SIGNUP_REQUEST,
  USER_SIGNUP_SUCCESS,
  USER_SIGNUP_FAILURE,
} from '@/constants';
import { UserSignUpTypes } from './types';

export const userSignupReq = (
  email: string,
  password: string,
  firstName: string,
  lastName: string,
): UserSignUpTypes => ({
  type: USER_SIGNUP_REQUEST,
  payload: {
    email,
    password,
    firstName,
    lastName,
  },
});

export const userSignupSuccess = (data: object): UserSignUpTypes => ({
  type: USER_SIGNUP_SUCCESS,
  payload: data,
});

export const userSignupFailure = (error: string): UserSignUpTypes => ({
  type: USER_SIGNUP_FAILURE,
  payload: error,
});
