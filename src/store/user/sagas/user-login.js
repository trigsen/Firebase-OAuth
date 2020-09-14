import { call, put, takeEvery } from 'redux-saga/effects';
import {
  USER_LOGIN_REQUEST,
  CALENDAR_PAGE_PATH,
  HOURS_TO_FILL_LOCAL_STORAGE,
  USER_LOCAL_STORAGE,
} from '@/constants';
import { userLoginSuccess, userLoginFailure } from '@/store/action';
import firebase from '@/firebase-config';
import { history } from '@/Routes.jsx';
import { setItemToLocalStorage } from '@/helpers';

function* logIn({ payload: { email, password } }) {
  try {
    const auth = firebase.auth();
    yield call([auth, auth.signInWithEmailAndPassword], email, password);
    yield put(userLoginSuccess(auth.currentUser));

    setItemToLocalStorage(USER_LOCAL_STORAGE, auth.currentUser);
    setItemToLocalStorage(HOURS_TO_FILL_LOCAL_STORAGE, {});
    history.push(CALENDAR_PAGE_PATH);
  } catch (error) {
    yield put(userLoginFailure(error.message));
  }
}

export function* watchUserLogin() {
  yield takeEvery(USER_LOGIN_REQUEST, logIn);
}
