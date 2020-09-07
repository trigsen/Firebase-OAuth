import React from 'react';
import { Router as BrowRouter, Switch } from 'react-router-dom';
import {
  CALENDAR_PAGE_PATH,
  LOGIN_PAGE_PATH,
  SIGNUP_PAGE_PATH,
} from '@/constants';
import { createBrowserHistory } from 'history';
import Landing from '@/components/blocks/Landing/Landing';
import LogInForm from '@/components/forms/AuthForm/LogInForm/LogInForm';
import SignUpForm from '@/components/forms/AuthForm/SignUpForm/SignUpForm';
import PrivateRoute from '@/components/routes/PrivateRoute/PrivateRoute';
import AuthRoute from '@/components/routes/AuthRoute/AuthRoute';

export const history = createBrowserHistory();

export function Router() {
  return (
    <BrowRouter history={history}>
      <Switch>
        <PrivateRoute exact path={CALENDAR_PAGE_PATH} component={Landing} />
        <AuthRoute path={LOGIN_PAGE_PATH} component={LogInForm} />
        <AuthRoute path={SIGNUP_PAGE_PATH} component={SignUpForm} />
      </Switch>
    </BrowRouter>
  );
}
