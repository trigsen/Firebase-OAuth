import {
  USER_SIGNOUT_SUCCESS,
  USER_SIGNOUT_FAILURE,
  USER_SIGNOUT_REQUEST,
} from '@/constants';
import { UserSignOutTypes } from '@/store/user/types';

export const userSignoutReq = (): UserSignOutTypes => ({
  type: USER_SIGNOUT_REQUEST,
});

export const userSignoutSuccess = (): UserSignOutTypes => ({
  type: USER_SIGNOUT_SUCCESS,
});

export const userSignoutFailure = (error: string) => ({
  type: USER_SIGNOUT_FAILURE,
  payload: error,
});
