import { CalendarReducer } from '@/reducer/types';
import { CalendarActionTypes } from '@/actions/types';
import {
  HOURS_TO_FILL_LOCAL_STORAGE,
  UPDATE_HOURS,
  USER_SIGNOUT_SUCCESS,
} from '@/constants';
import { getItemFromLocalStorage } from '@/helpers';

export const initialValue: CalendarReducer = {
  hours: getItemFromLocalStorage(HOURS_TO_FILL_LOCAL_STORAGE),
};

export const calendar = (
  state = initialValue,
  { type, payload }: CalendarActionTypes,
) => {
  switch (type) {
    case UPDATE_HOURS: {
      return {
        hours: {
          ...state.hours,
          ...(payload as object),
        },
      };
    }
    case USER_SIGNOUT_SUCCESS: {
      return {
        ...state,
        hours: {},
      };
    }
    default: {
      return state;
    }
  }
};
