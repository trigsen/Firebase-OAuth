import { SET_LOCALE, EN_LANG } from '@/constants';

const initialState = {
  lang: EN_LANG,
};

const locale = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_LOCALE:
      return {
        ...state,
        lang: payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default locale;
