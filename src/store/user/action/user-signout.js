import {
  USER_SIGNOUT_SUCCESS,
  USER_SIGNOUT_FAILURE,
  USER_SIGNOUT_REQUEST,
} from '@/constants';

export const userSignoutReq = () => ({
  type: USER_SIGNOUT_REQUEST,
});

export const userSignoutSuccess = () => ({
  type: USER_SIGNOUT_SUCCESS,
});

export const userSignoutFailure = error => ({
  type: USER_SIGNOUT_FAILURE,
  payload: error,
});
