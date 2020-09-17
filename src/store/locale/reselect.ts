import { createSelector } from 'reselect';
import { RootState } from '@/store/reducer';
import { LocaleReducer } from './type';

const getLocale = (state: RootState) => state.locale;

export const getLangSelector = createSelector(
  getLocale,
  (state: LocaleReducer) => state.lang,
);
