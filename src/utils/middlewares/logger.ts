import { Middleware } from 'redux';
import { RootState } from '@/reducer';
import {
  USER_LOGIN_SUCCESS,
  USER_SIGNOUT_SUCCESS,
  USER_SIGNUP_SUCCESS,
} from '@/constants';

// eslint-disable-next-line
export const logger: Middleware<{}, RootState> = state => next => action => {
  switch (action.type) {
    case USER_SIGNUP_SUCCESS:
    case USER_LOGIN_SUCCESS:
      console.log(
        `${
          action.payload.email
        } start his session in ${new Date().getHours()}:${new Date().getMinutes()}`,
      );
      break;
    case USER_SIGNOUT_SUCCESS:
      console.log(
        `Current session was ended in ${new Date().getHours()}:${new Date().getMinutes()}`,
      );
      break;
    default:
      return next(action);
  }
  return next(action);
};
