import { Middleware } from 'redux';
import { RootState } from '@/reducer';
import {
  HOURS_TO_FILL_LOCAL_STORAGE,
  USER_LOCAL_STORAGE,
  USER_SIGNOUT_SUCCESS,
} from '@/constants';
import { removeItemFromLocalStorage } from '@/utils/local-storage';

// eslint-disable-next-line
export const localStorageRemover: Middleware<{}, RootState> = state => next => action => {
  switch (action.type) {
    case USER_SIGNOUT_SUCCESS:
      removeItemFromLocalStorage(USER_LOCAL_STORAGE);
      removeItemFromLocalStorage(HOURS_TO_FILL_LOCAL_STORAGE);
      break;
    default: return next(action);
  }
  return next(action);
};
