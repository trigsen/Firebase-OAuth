import { SET_LOCALE, EN_LANG } from '@/constants';
import { LocalTypes } from '@/actions/types';
import { LocaleReducer } from './types';

export const initialState: LocaleReducer = {
  lang: EN_LANG,
};

export const locale = (
  state = initialState,
  { type, payload }: LocalTypes,
): LocaleReducer => {
  switch (type) {
    case SET_LOCALE:
      return {
        ...state,
        lang: payload,
      };
    default:
      return state;
  }
};
