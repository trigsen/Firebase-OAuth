import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { LOGIN_PAGE_PATH, USER_LOCAL_STORAGE } from '@/constants';
import PropsType from 'prop-types';

function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props => (localStorage.getItem(USER_LOCAL_STORAGE) ? (
        <Component {...props} />
      ) : (
        <Redirect to={LOGIN_PAGE_PATH} />
      ))} />
  );
}

PrivateRoute.propTypes = {
  component: PropsType.element.isRequired,
};

export default PrivateRoute;
