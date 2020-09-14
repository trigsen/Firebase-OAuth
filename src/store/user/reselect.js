import { createSelector } from 'reselect';

const getUserDataState = state => state.user.data;

export const getUserEmailSelector = createSelector(
  getUserDataState,
  state => state.email,
);
