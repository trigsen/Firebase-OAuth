import React from 'react';
import { Route, Redirect } from 'react-router';
import { USER_LOCAL_STORAGE, CALENDAR_PAGE_PATH } from '@/constants';

interface AuthRouteProps {
  path: string;
  component: React.ElementType;
}

const AuthRoute: React.FC<AuthRouteProps> = ({
  component: Component,
  ...rest
}) => (
  <Route
    {...rest}
    render={props => (localStorage.getItem(USER_LOCAL_STORAGE) ? (
      <Redirect to={CALENDAR_PAGE_PATH} />
    ) : (
      <Component {...props} />
    ))} />
);

export default AuthRoute;
