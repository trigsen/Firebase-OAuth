import { createSelector } from 'reselect';
import { RootState } from '@/reducer';
import { ThemeReducer } from '@/reducer/types';

const getTheme = (state: RootState) => state.theme;

export const getIsDarkState = createSelector(
  getTheme,
  (state: ThemeReducer) => state.isDark,
);
