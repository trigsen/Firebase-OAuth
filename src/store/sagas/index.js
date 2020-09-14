import { all } from 'redux-saga/effects';
import {
  watchUserLogin,
  watchUserSignOut,
  watchUserSignUp,
} from '@/store/user/sagas';

export default function* rootSaga() {
  yield all([watchUserLogin(), watchUserSignOut(), watchUserSignUp()]);
}
