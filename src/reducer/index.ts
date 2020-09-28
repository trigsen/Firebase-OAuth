import { combineReducers } from 'redux';
import { withUndoRedo } from '@/reducer/withUndoRedo';
import { user } from './user';
import { locale } from './locale';
import { theme } from './theme';
import { calendar, initialValue as calendarInitState } from './calendar';

export const rootReducer = combineReducers({
  user,
  locale,
  theme,
  calendar: withUndoRedo(calendar, calendarInitState, 'CALENDAR'),
});

export type RootState = ReturnType<typeof rootReducer>;
