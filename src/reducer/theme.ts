import { SET_THEME } from '@/constants';
import { ThemeTypes } from '@/actions/types';
import { ThemeReducer } from './types';

const initialState: ThemeReducer = {
  isDark: false,
};

export const theme = (
  state = initialState,
  { type }: ThemeTypes,
): ThemeReducer => {
  switch (type) {
    case SET_THEME:
      return {
        ...state,
        isDark: !state.isDark,
      };
    default:
      return state;
  }
};
