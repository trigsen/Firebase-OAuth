import {
  USER_SIGNOUT_SUCCESS,
  USER_SIGNOUT_FAILURE,
  USER_SIGNOUT_REQUEST,
  LOGIN_PAGE_PATH,
  USER_LOCAL_STORAGE,
} from '@/constants';

import firebase from '@/firebase-config';
import { history } from '@/Routes.jsx';

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

export const userSignout = () => async dispatch => {
  dispatch(userSignoutReq());
  try {
    await firebase.auth().signOut();
    dispatch(userSignoutSuccess());

    localStorage.removeItem(USER_LOCAL_STORAGE);
    history.push(LOGIN_PAGE_PATH);
  } catch (error) {
    dispatch(userSignoutFailure(error));
  }
};
