import { SET_THEME } from '@/constants';
import { ThemeTypes } from './types';

export const setTheme = (): ThemeTypes => ({
  type: SET_THEME,
});
