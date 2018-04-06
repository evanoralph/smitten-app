import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Meteor } from 'meteor/meteor';
import { Provider } from 'react-redux';
import store from '../../startup/configs/store';
import { injectDeps } from 'react-simple-di-extra';
import context from '../../startup/configs/context';
import actions from '../../startup/configs/actions';

import Login from '../pages/login/login';
import Main from '../pages/main/main';

import { compose, merge } from 'react-komposer';
import getTrackerLoader from '../../lib/getTrackerLoader';
import { useDeps } from 'react-simple-di-extra';

import RoutesAuthenticated from './routes/authenticated';
import RoutePublic from './routes/public';

const App = appProps => (
  <Provider store={store}>
    <Router>
      <div className="App">
        <Switch>
          <Route exact name="index" path="/" component={Main} />
          <RoutePublic exact name="login" path="/login" component={Login} {...appProps} />
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
