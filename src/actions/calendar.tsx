import { UPDATE_HOURS } from '@/constants';
import { HoursStorage } from '@/components/blocks/Calendar/types';

export const updateHours = (hoursStorage: HoursStorage) => ({
  type: UPDATE_HOURS,
  payload: hoursStorage,
});
