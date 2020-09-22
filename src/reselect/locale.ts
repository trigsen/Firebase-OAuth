import { createSelector } from 'reselect';
import { RootState } from '@/reducer';
import { LocaleReducer } from '@/reducer/types';

const getLocale = (state: RootState) => state.locale;

export const getLangSelector = createSelector(
  getLocale,
  (state: LocaleReducer) => state.lang,
);
