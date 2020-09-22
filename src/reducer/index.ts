import { combineReducers } from 'redux';
import { user } from './user';
import { locale } from './locale';
import { theme } from './theme';

export const rootReducer = combineReducers({
  user,
  locale,
  theme,
});

export type RootState = ReturnType<typeof rootReducer>;
