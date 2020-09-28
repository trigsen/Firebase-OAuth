import { RootState } from '@/reducer';
import { createSelector } from 'reselect';
import { CalendarReducer } from '@/reducer/types';

const getPresentData = (state: RootState) => state.calendar.present as CalendarReducer;
const getPastData = (state: RootState) => state.calendar.past as Array<CalendarReducer>;

export const getHoursStorage = createSelector(
  getPresentData,
  (state: CalendarReducer) => state.hours,
);

export const getCalendarPastValues = createSelector(
  getPastData,
  (state: Array<CalendarReducer>) => state,
);
