import { SET_THEME } from '@/constants';
import { ThemeReducer, ThemeTypes } from './types';

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
      return {
        ...state,
      };
  }
};
