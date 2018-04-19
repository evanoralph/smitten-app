import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

const RoutesAuthenticated = ({ loggingIn, authenticated, onSetOpen, open, component, ...rest }) => (
  <Route
    {...rest}
    render={props => {
      if (loggingIn) return <div />;
      return authenticated ? (
        React.createElement(component, { ...props, loggingIn, onSetOpen, open, authenticated })
      ) : (
        <Redirect to="/" />
      );
    }}
  />
);

RoutesAuthenticated.propTypes = {
  loggingIn: PropTypes.bool,
  authenticated: PropTypes.bool,
  component: PropTypes.func,
};

export default RoutesAuthenticated;
