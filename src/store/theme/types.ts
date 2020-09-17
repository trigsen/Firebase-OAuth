import { SET_THEME } from '@/constants';

export interface ThemeReducer {
  isDark: boolean;
}

interface setThemeAction {
  type: typeof SET_THEME;
}

export type ThemeTypes = setThemeAction;
