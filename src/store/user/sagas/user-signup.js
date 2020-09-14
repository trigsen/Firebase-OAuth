import { takeEvery, call, put } from 'redux-saga/effects';
import {
  USER_SIGNUP_REQUEST,
  CALENDAR_PAGE_PATH,
  USER_LOCAL_STORAGE,
  HOURS_TO_FILL_LOCAL_STORAGE,
} from '@/constants';
import { history } from '@/Routes.jsx';
import firebase from '@/firebase-config';
import { setItemToLocalStorage } from '@/helpers';
import { userSignupSuccess, userSignupFailure } from '@/store/action';

function* signUp({
  payload: {
    email, password, firstName, lastName,
  },
}) {
  try {
    const auth = firebase.auth();
    yield call([auth, auth.createUserWithEmailAndPassword], email, password);
    yield call([auth.currentUser, auth.currentUser.updateProfile], {
      displayName: `${firstName} ${lastName}`,
    });
    yield put(userSignupSuccess(auth.currentUser));

    setItemToLocalStorage(USER_LOCAL_STORAGE, firebase.auth().currentUser);
    setItemToLocalStorage(HOURS_TO_FILL_LOCAL_STORAGE, {});
    history.push(CALENDAR_PAGE_PATH);
  } catch (error) {
    yield put(userSignupFailure(error.message));
  }
}

export function* watchUserSignUp() {
  yield takeEvery(USER_SIGNUP_REQUEST, signUp);
}
