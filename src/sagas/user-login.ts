import { call, put, takeEvery } from 'redux-saga/effects';
import {
  USER_LOGIN_REQUEST,
  CALENDAR_PAGE_PATH,
  HOURS_TO_FILL_LOCAL_STORAGE,
  USER_LOCAL_STORAGE,
  FIREBASE_URL,
  FIREBASE_SIGN_IN,
} from '@/constants';
import { userLoginSuccess, userLoginFailure } from '@/actions';
import { history } from '@/Routes';
import { setItemToLocalStorage } from '@/utils/local-storage';
import RequestService from '@/utils/api';

interface LogInProps {
  type: typeof USER_LOGIN_REQUEST;
  payload: {
    email: string;
    password: string;
  };
}

function* logIn({ payload: { email, password } }: LogInProps) {
  try {
    const requester = RequestService.getInstance();
    const URL = `${FIREBASE_URL}/${FIREBASE_SIGN_IN}?key=${process.env.REACT_APP_API_KEY}`;
    const body = {
      email,
      password,
    };

    const response = yield call([requester, requester.post], URL, body);
    const value = yield response.json();
    yield put(userLoginSuccess(value));

    setItemToLocalStorage(USER_LOCAL_STORAGE, value);
    setItemToLocalStorage(HOURS_TO_FILL_LOCAL_STORAGE, {});
    history.push(CALENDAR_PAGE_PATH);
  } catch (error) {
    yield put(userLoginFailure(error.message));
  }
}

export function* watchUserLogin() {
  yield takeEvery(USER_LOGIN_REQUEST, logIn);
}
