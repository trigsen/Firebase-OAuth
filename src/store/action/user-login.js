import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILURE,
  CALENDAR_PAGE_PATH,
  USER_LOCAL_STORAGE,
  HOURS_TO_FILL_LOCAL_STORAGE,
} from '@/constants';
import firebase from '@/firebase-config';
import { history } from '@/Routes.jsx';

export const userLoginReq = () => ({
  type: USER_LOGIN_REQUEST,
});

export const userLoginSuccess = data => ({
  type: USER_LOGIN_SUCCESS,
  payload: data,
});

export const userLoginFailure = error => ({
  type: USER_LOGIN_FAILURE,
  payload: error,
});

export const userLogin = (email, password) => async dispatch => {
  try {
    dispatch(userLoginReq());
    await firebase.auth().signInWithEmailAndPassword(email, password);
    dispatch(userLoginSuccess(firebase.auth().currentUser));

    localStorage.setItem(
      USER_LOCAL_STORAGE,
      JSON.stringify(firebase.auth().currentUser),
    );
    localStorage.setItem(HOURS_TO_FILL_LOCAL_STORAGE, JSON.stringify({}));
    history.push(CALENDAR_PAGE_PATH);
  } catch (error) {
    dispatch(userLoginFailure(error.message));
  }
};
