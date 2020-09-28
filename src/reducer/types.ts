import { User, Messages } from '@/common/types/types';
import { HoursStorage } from '@/components/blocks/Calendar/types';

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

export interface CalendarReducer {
  hours: HoursStorage;
}

export interface ReducerWithUndoRedo<T> {
  past: Array<T>;
  present: T;
  future: Array<T>;
}

export type Reducers =
  | UserReducer
  | ThemeReducer
  | LocaleReducer
  | CalendarReducer
  | null;
