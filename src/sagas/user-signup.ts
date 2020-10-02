import { takeEvery, call, put } from 'redux-saga/effects';
import {
  USER_SIGNUP_REQUEST,
  CALENDAR_PAGE_PATH,
  USER_LOCAL_STORAGE,
  HOURS_TO_FILL_LOCAL_STORAGE,
  FIREBASE_URL,
  FIREBASE_SIGN_UP,
  FIREBASE_UPDATE_PROFILE,
} from '@/constants';
import { history } from '@/Routes';
import { setItemToLocalStorage } from '@/utils/local-storage';
import { userSignupSuccess, userSignupFailure } from '@/actions';
import RequestService from '@/utils/api';

interface SignUpProps {
  type: typeof USER_SIGNUP_REQUEST;
  payload: {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
  };
}

function* signUp({
  payload: {
    email, password, firstName, lastName,
  },
}: SignUpProps) {
  try {
    const requester = RequestService.getInstance();
    const URL = `${FIREBASE_URL}/${FIREBASE_SIGN_UP}?key=${process.env.REACT_APP_API_KEY}`;
    const body = {
      email,
      password,
    };
    const { value } = yield call([requester, requester.post], URL, body);

    const updateUserURL = `${FIREBASE_URL}/${FIREBASE_UPDATE_PROFILE}?key=${process.env.REACT_APP_API_KEY}`;
    const updatedValues = {
      idToken: value.idToken,
      displayName: `${firstName} ${lastName}`,
    };
    yield call([requester, requester.post], updateUserURL, updatedValues);

    yield put(userSignupSuccess(value));

    setItemToLocalStorage(USER_LOCAL_STORAGE, value);
    setItemToLocalStorage(HOURS_TO_FILL_LOCAL_STORAGE, {});
    history.push(CALENDAR_PAGE_PATH);
  } catch (error) {
    yield put(userSignupFailure(error.message));
  }
}

export function* watchUserSignUp() {
  yield takeEvery(USER_SIGNUP_REQUEST, signUp);
}
