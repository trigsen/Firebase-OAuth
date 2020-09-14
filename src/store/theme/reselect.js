import { createSelector } from 'reselect';

const getTheme = state => state.theme;

export const getIsDarkState = createSelector(getTheme, state => state.isDark);
