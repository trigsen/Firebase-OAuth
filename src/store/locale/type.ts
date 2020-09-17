import { SET_LOCALE } from '@/constants';

export interface Messages {
  en: {
    [key: string]: string;
  };
  ru: {
    [key: string]: string;
  };
}

interface SetLocale {
  type: typeof SET_LOCALE;
  payload: keyof Messages;
}

export interface LocaleReducer {
  lang: keyof Messages;
}

export type LocalTypes = SetLocale;
