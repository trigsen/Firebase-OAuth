import { createSelector } from 'reselect';

const getLocale = state => state.locale;

export const getLangSelector = createSelector(getLocale, state => state.lang);
