import { SET_THEME } from '@/constants';

const initialState = {
  isDark: false,
};

export const theme = (state = initialState, { type }) => {
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
