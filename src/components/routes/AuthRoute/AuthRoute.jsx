import React from 'react';
import { Route, Redirect } from 'react-router';
import { USER_LOCAL_STORAGE, CALENDAR_PAGE_PATH } from '@/constants';
import PropsType from 'prop-types';

function AuthRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props => (localStorage.getItem(USER_LOCAL_STORAGE) ? (
        <Redirect to={CALENDAR_PAGE_PATH} />
      ) : (
        <Component {...props} />
      ))} />
  );
}

AuthRoute.propTypes = {
  component: PropsType.func.isRequired,
};

export default AuthRoute;
