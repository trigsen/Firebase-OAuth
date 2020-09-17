import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { LOGIN_PAGE_PATH, USER_LOCAL_STORAGE } from '@/constants';

interface Props {
  component: React.ElementType;
}

const PrivateRoute: React.FC<Props> = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => (localStorage.getItem(USER_LOCAL_STORAGE) ? (
      <Component {...props} />
    ) : (
      <Redirect to={LOGIN_PAGE_PATH} />
    ))} />
);

export default PrivateRoute;
