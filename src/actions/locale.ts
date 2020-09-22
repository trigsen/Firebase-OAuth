import { SET_LOCALE } from '@/constants';
import { Messages } from '@/common/types/types';
import { LocalTypes } from './types';

export const setLocale = (locale: keyof Messages): LocalTypes => ({
  type: SET_LOCALE,
  payload: locale,
});
