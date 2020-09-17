import { combineReducers } from 'redux';
import { user } from '@/store/user';
import { locale } from '@/store/locale';
import { theme } from '@/store/theme';

export const rootReducer = combineReducers({
  user,
  locale,
  theme,
});

export type RootState = ReturnType<typeof rootReducer>;
