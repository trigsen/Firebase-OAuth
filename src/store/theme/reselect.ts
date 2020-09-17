import { createSelector } from 'reselect';
import { RootState } from '@/store/reducer';
import { ThemeReducer } from './types';

const getTheme = (state: RootState) => state.theme;

export const getIsDarkState = createSelector(
  getTheme,
  (state: ThemeReducer) => state.isDark,
);
