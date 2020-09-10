import React from 'react';
import { Router as BrowRouter, Switch } from 'react-router-dom';
import {
  CALENDAR_PAGE_PATH,
  LOGIN_PAGE_PATH,
  SIGNUP_PAGE_PATH,
} from '@/constants';
import { createBrowserHistory } from 'history';
import Home from '@/components/pages/Home/Home';
import LogInPage from '@/components/pages/LogInPage/LogInPage';
import SignUpPage from '@/components/pages/SignUpPage/SignUpPage';
import PrivateRoute from '@/components/routes/PrivateRoute/PrivateRoute';
import AuthRoute from '@/components/routes/AuthRoute/AuthRoute';
import NotFoundRoute from '@/components/routes/NotFoundRoute/NotFoundRoute';

export const history = createBrowserHistory();

export function Router() {
  return (
    <BrowRouter history={history}>
      <Switch>
        <PrivateRoute exact path={CALENDAR_PAGE_PATH} component={Home} />
        <AuthRoute path={LOGIN_PAGE_PATH} component={LogInPage} />
        <AuthRoute path={SIGNUP_PAGE_PATH} component={SignUpPage} />
        <NotFoundRoute path="*" />
      </Switch>
    </BrowRouter>
  );
}
