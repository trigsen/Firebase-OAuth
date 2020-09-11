import {
  USER_SIGNUP_REQUEST,
  USER_SIGNUP_SUCCESS,
  USER_SIGNUP_FAILURE,
  CALENDAR_PAGE_PATH,
  USER_LOCAL_STORAGE,
} from '@/constants';
import { history } from '@/Routes.jsx';
import firebase from '@/firebase-config';
import { setItemToLocalStorage } from '@/helpers';

export const userSignupReq = () => ({
  type: USER_SIGNUP_REQUEST,
});

export const userSignupSuccess = data => ({
  type: USER_SIGNUP_SUCCESS,
  payload: data,
});

export const userSignupFailure = error => ({
  type: USER_SIGNUP_FAILURE,
  payload: error,
});

export const userSignup = (email, password, firstName, lastName) => async dispatch => {
  try {
    dispatch(userSignupReq());
    await firebase.auth().createUserWithEmailAndPassword(email, password);
    await firebase.auth().currentUser.updateProfile({
      displayName: `${firstName} ${lastName}`,
    });
    dispatch(userSignupSuccess(firebase.auth().currentUser));

    setItemToLocalStorage(
      USER_LOCAL_STORAGE,
      JSON.stringify(firebase.auth().currentUser),
    );
    history.push(CALENDAR_PAGE_PATH);
  } catch (error) {
    dispatch(userSignupFailure(error.message));
  }
};
