import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import {
  LOGIN_PAGE_PATH,
  CALENDAR_PAGE_PATH,
  USER_LOCAL_STORAGE,
} from '@/constants';

const NotFoundRoute = ({ ...rest }) => (
  <Route
    {...rest}
    render={() => (
      <Redirect
        to={
          localStorage.getItem(USER_LOCAL_STORAGE)
            ? CALENDAR_PAGE_PATH
            : LOGIN_PAGE_PATH
        } />
    )} />
);

export default NotFoundRoute;
