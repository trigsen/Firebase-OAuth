import { call, put, takeEvery } from 'redux-saga/effects';
import {
  USER_SIGNOUT_REQUEST,
  LOGIN_PAGE_PATH,
  USER_LOCAL_STORAGE,
  HOURS_TO_FILL_LOCAL_STORAGE,
} from '@/constants';
import { removeItemFromLocalStorage } from '@/helpers';
import { userSignoutSuccess, userSignoutFailure } from '@/store/action';
import firebase from '@/firebase-config';
import { history } from '@/Routes.jsx';

function* signOut() {
  try {
    const auth = firebase.auth();
    yield call([auth, auth.signOut]);
    yield put(userSignoutSuccess());

    removeItemFromLocalStorage(USER_LOCAL_STORAGE);
    removeItemFromLocalStorage(HOURS_TO_FILL_LOCAL_STORAGE);
    history.push(LOGIN_PAGE_PATH);
  } catch (error) {
    yield put(userSignoutFailure(error.message));
  }
}

export function* watchUserSignOut() {
  yield takeEvery(USER_SIGNOUT_REQUEST, signOut);
}
