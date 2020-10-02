import { call, put, takeEvery } from 'redux-saga/effects';
import { USER_SIGNOUT_REQUEST, LOGIN_PAGE_PATH } from '@/constants';
import { userSignoutSuccess, userSignoutFailure } from '@/actions';
import firebase from '@/firebase-config';
import { history } from '@/Routes';

function* signOut() {
  try {
    const auth = firebase.auth();
    yield call([auth, auth.signOut]);
    yield put(userSignoutSuccess());

    history.push(LOGIN_PAGE_PATH);
  } catch (error) {
    yield put(userSignoutFailure(error.message));
  }
}

export function* watchUserSignOut() {
  yield takeEvery(USER_SIGNOUT_REQUEST, signOut);
}
