import { all } from 'redux-saga/effects';

import { watchUserLogin } from './user-login';
import { watchUserSignOut } from './user-signout';
import { watchUserSignUp } from './user-signup';

export default function* rootSaga() {
  yield all([watchUserLogin(), watchUserSignOut(), watchUserSignUp()]);
}
