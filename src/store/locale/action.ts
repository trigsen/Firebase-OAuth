import { SET_LOCALE } from '@/constants';
import { LocalTypes, Messages } from './type';

export const setLocale = (locale: keyof Messages): LocalTypes => ({
  type: SET_LOCALE,
  payload: locale,
});
