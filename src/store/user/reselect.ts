import { createSelector } from 'reselect';
import { RootState } from '@/store/reducer';
import { UserReducer } from './types';

const getUserDataState = (state: RootState) => state.user;

export const getUserEmailSelector = createSelector(
  getUserDataState,
  (state: UserReducer) => state.data.email,
);
