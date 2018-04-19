import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Meteor } from 'meteor/meteor';
import { Provider } from 'react-redux';
import store from '../../startup/configs/store';
import { injectDeps } from 'react-simple-di-extra';
import context from '../../startup/configs/context';
import actions from '../../startup/configs/actions';

import Main from '../pages/main/main';
import SignupPage from '../pages/sign-up/signup';
import ForgotPasswordPage from '../pages/forgot_password/forgot_password';
import UserLandingPage from '../pages/user_landing/user_landing';

import { compose, merge } from 'react-komposer';
import getTrackerLoader from '../../lib/getTrackerLoader';
import { useDeps } from 'react-simple-di-extra';

import AuthenticatedRoute from './routes/authenticated';
import PublicRoute from './routes/public';

const App = appProps => (
  <Provider store={store}>
    <Router>
      <div className="App">
        <Switch>
          <PublicRoute
              exact
              name="login"
              path="/"
              component={Main}
              {...appProps} />
          <PublicRoute
              exact
              name="signup"
              path="/sign-up"
              component={SignupPage}
              {...appProps} />
          <PublicRoute
            exact
            name="forgot_password"
            path="/forgot-password"
            component={ForgotPasswordPage}
            {...appProps}
          />
          <AuthenticatedRoute
            exact
            name="user_landing"
            path="/main"
            component={UserLandingPage}
            {...appProps}
          />
        </Switch>
      </div>
    </Router>
  </Provider>
);

function composer(props, onData) {
  const loggingIn = Meteor.loggingIn();
  console.log(props);
  onData(null, {
    loggingIn,
    authenticated: !loggingIn && !!Meteor.userId(),
  });
}

export default merge(compose(getTrackerLoader(composer)))(injectDeps(context, actions)(App));
