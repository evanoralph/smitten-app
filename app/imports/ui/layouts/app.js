import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { Meteor } from 'meteor/meteor';
import { Provider } from 'react-redux';
import { injectDeps, useDeps } from 'react-simple-di-extra';
import Sidebar from 'react-sidebar';
import { compose, merge } from 'react-komposer';

import store from '../../startup/configs/store';
import context from '../../startup/configs/context';
import actions from '../../startup/configs/actions';

import Main from '../pages/login/login';
import SignupPage from '../pages/sign-up/signup';
import ForgotPasswordPage from '../pages/forgot_password/forgot_password';
import UserLandingPage from '../pages/main/main';

import getTrackerLoader from '../../lib/getTrackerLoader';

import AuthenticatedRoute from './routes/authenticated';
import PublicRoute from './routes/public';

class App extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      showHeader: true,
      currentUser: props.currentUser,
      sidebarOpen: false,
    };

    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }

  onSetSidebarOpen = function(open, url) {
    if (!!url) {
      // TODO: REDIRECT HERE
      //
      setTimeout(() => {
        this.setState({ sidebarOpen: open });
      }, 100);
    } else {
      this.setState({ sidebarOpen: open });
    }
  };

  logOut() {
    Meteor.logout(() => {
      this.setState({ sidebarOpen: !this.state.sidebarOpen });
    });
  }

  sideBar(SideMenu, SideMenuStyles) {
    if (Meteor.userId()) {
      return (
        <Sidebar
          sidebar={SideMenu}
          styles={SideMenuStyles}
          open={this.state.sidebarOpen}
          onSetOpen={this.onSetSidebarOpen}
        >
          <div />
        </Sidebar>
      );
    }
  }

  render() {
    var SideMenu = (
      <div id="sideNav">
        <div className="side-header">
          <span className="sidebar-title">SETTINGS</span>
        </div>
        <div className="side-menu">
          <Link
            className="side-menu-item"
            to={'/contact'}
            onClick={this.onSetSidebarOpen.bind(this, !this.state.sidebarOpen)}
          >
            CONTACT SETTINGS
          </Link>
          <Link
            className="side-menu-item"
            to="/profile"
            onClick={this.onSetSidebarOpen.bind(this, !this.state.sidebarOpen, '/profile')}
          >
            MY PROFILE
          </Link>
          <Link
            className="side-menu-item"
            to={'/contact'}
            onClick={this.onSetSidebarOpen.bind(this, !this.state.sidebarOpen)}
          >
            SUPPORT
          </Link>
          <Link
            className="side-menu-item"
            to={'/contact'}
            onClick={this.onSetSidebarOpen.bind(this, !this.state.sidebarOpen)}
          >
            TERMS OF SERVICE
          </Link>
          <Link
            className="side-menu-item"
            to={'/contact'}
            onClick={this.onSetSidebarOpen.bind(this, !this.state.sidebarOpen)}
          >
            PRIVACY POLICY
          </Link>
        </div>
        <div className="side-footer">
          <button onClick={this.logOut.bind(this)}>LOG OUT</button>
        </div>
      </div>
    );

    let SideMenuStyles = {
      root: {
        //display: classNames({"none": !this.state.showHeader}),
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        overflow: 'hidden',
        pointerEvents: 'none',
        zIndex: 1001,
        height: 'calc(100vh - 20px) !important',
      },
      sidebar: {
        zIndex: 2,
        position: 'absolute',
        top: 0,
        bottom: 0,
        transition: 'transform .2s ease-in-out',
        WebkitTransition: '-webkit-transform .2s ease-in-out',
        willChange: 'transform',
        overflowY: 'auto',
        backgroundColor: '#F6F4F0',
        height: '100vh',
        padding: '0px',
        pointerEvents: 'auto',
        overflow: 'hidden',
        width: '90vw',
        boxShadow: 'rgba(0, 0, 0, 0.25) 10px 0px 20px !important',
      },
      content: {
        position: 'absolute',
        top: 20,
        left: 0,
        right: 0,
        bottom: 0,
        overflowY: 'hidden',
        WebkitOverflowScrolling: 'touch',
        transition: 'left .2s ease-in-out, right .2s ease-in-out',
        pointerEvents: 'none',
        height: 'calc(100vh - 20px)',
      },
      overlay: {
        zIndex: 0,
        position: 'fixed',
        top: 20,
        left: 0,
        right: 0,
        bottom: 0,
        opacity: 0,
        visibility: 'hidden',
        transition: 'opacity .2s ease-in-out, visibility .2s ease-in-out',
        backgroundColor: 'rgba(0,0,0,0)',
        height: 'calc(100vh - 20px)',
        pointerEvents: 'none',
        overflow: 'hidden',
      },
      dragHandle: {
        zIndex: 1,
        position: 'fixed',
        top: 0,
        bottom: 0,
        pointerEvents: 'auto',
      },
    };

    return (
      <Provider store={store}>
        <Router>
          <Route
            render={({ location }) => (
              <div id="app-container">
                <TransitionGroup>
                  <CSSTransition key={location.key} classNames="fade" timeout={300}>
                    <Switch location={location}>
                      <PublicRoute exact name="login" path="/" component={Main} {...this.props} />
                      <PublicRoute
                        exact
                        name="sign up"
                        path="/sign-up"
                        component={SignupPage}
                        {...this.props}
                      />
                      <AuthenticatedRoute
                        exact
                        name="main"
                        path="/main"
                        component={UserLandingPage}
                        onSetOpen={this.onSetSidebarOpen.bind(this)}
                        open={this.state.sidebarOpen}
                        {...this.props}
                      />
                      <PublicRoute
                        exact
                        name="forgot_password"
                        path="/forgot-password"
                        component={ForgotPasswordPage}
                        {...this.props}
                      />
                    </Switch>
                  </CSSTransition>
                </TransitionGroup>
                {this.sideBar(SideMenu, SideMenuStyles)}
              </div>
            )}
          />
        </Router>
      </Provider>
    );
  }
}

function composer(props, onData) {
  const loggingIn = Meteor.loggingIn();
  console.log(props);
  onData(null, {
    loggingIn,
    authenticated: !loggingIn && !!Meteor.userId(),
  });
}

export default merge(compose(getTrackerLoader(composer)))(injectDeps(context, actions)(App));
