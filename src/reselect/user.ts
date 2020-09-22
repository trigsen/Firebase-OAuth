import { createSelector } from 'reselect';
import { RootState } from '@/reducer';
import { UserReducer } from '@/reducer/types';

const getUserDataState = (state: RootState) => state.user;

export const getUserEmailSelector = createSelector(
  getUserDataState,
  (state: UserReducer) => state.data.email,
);
