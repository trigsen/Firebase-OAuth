import { CALENDAR_REDO, CALENDAR_UNDO } from '@/constants';
import { Action } from 'redux';

export const calendarUndoAction = (): Action => ({
  type: CALENDAR_UNDO,
});

export const calendarRedoAction = (): Action => ({
  type: CALENDAR_REDO,
});
