import { User, Messages } from '@/common/types/types';

export interface LocaleReducer {
  lang: keyof Messages;
}

export interface ThemeReducer {
  isDark: boolean;
}

export interface UserReducer {
  request: boolean;
  error: string | object;
  data: User;
}
