import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { Meteor } from "meteor/meteor";
import { Provider } from "react-redux";
import { injectDeps, useDeps } from "react-simple-di-extra";
import Sidebar from "react-sidebar";
import { compose, merge } from "react-komposer";
import "sweetalert2/dist/sweetalert2.min.css";
import store from "../../startup/configs/store";
import context from "../../startup/configs/context";
import actions from "../../startup/configs/actions";

import Main from "../pages/login/login";
import SignupPage from "../pages/sign_up/signup";
import ForgotPasswordPage from "../pages/forgot_password/forgot_password";
import ResetPasswordPage from "../pages/reset_password/reset_password";

import UserLandingPage from "../pages/main/main";
import GenderPairingPage from "../pages/gender_pairing/gender_pairing";
import PhotoUploadPage from "../pages/photo_upload/photo_upload";
import ProfilePage from "../pages/profile/profile";

import getTrackerLoader from "../../lib/getTrackerLoader";

import AuthenticatedRoute from "./routes/authenticated";
import PublicRoute from "./routes/public";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showHeader: true,
      currentUser: props.currentUser,
      sidebarOpen: false
    };

    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }

  componentDidMount() {
    const app = {
      initialize: function() {
        this.bindEvents();
      },
      bindEvents: function() {
        document.addEventListener("deviceready", this.onDeviceReady, false);
        document.addEventListener("resume", this.onDeviceResume, false);
      },
      onDeviceReady: function() {
        app.handleBranch();
      },
      onDeviceResume: function() {
        app.handleBranch();
      },
      handleBranch: function() {
        Branch.initSession(function success(res) {
          if (res["+clicked_branch_link"]) {
            if (res.reset_token) {
              document.location.pathname = `/reset-password/${res.reset_token}`;
            }
          }
        });
      }
    };

    if (Meteor.isCordova) {
      app.initialize();
    }
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
          <span className="sidebar-title">
            <img src="/assets/smitten (logo text).svg" alt="" />
          </span>
        </div>
        <div className="side-menu">
          <Link
            className="side-menu-item"
            to="/profile"
            onClick={this.onSetSidebarOpen.bind(
              this,
              !this.state.sidebarOpen,
              "/profile"
            )}
          >
            MY PROFILE
          </Link>
          <Link
            className="side-menu-item"
            to={"/messages"}
            onClick={this.onSetSidebarOpen.bind(this, !this.state.sidebarOpen)}
          >
            MESSAGES
          </Link>
          <Link
            className="side-menu-item"
            to={"/contact"}
            onClick={this.onSetSidebarOpen.bind(this, !this.state.sidebarOpen)}
          >
            TERMS OF SERVICE
          </Link>
          <Link
            className="side-menu-item"
            to={"/contact"}
            onClick={this.onSetSidebarOpen.bind(this, !this.state.sidebarOpen)}
          >
            PRIVACY POLICY
          </Link>
        </div>
        <div className="side-footer row center-xs">
          <button className="btn-pink-rounded" onClick={this.logOut.bind(this)}>
            LOG OUT
          </button>
        </div>
      </div>
    );

    let SideMenuStyles = {
      root: {
        //display: classNames({"none": !this.state.showHeader}),
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        overflow: "hidden",
        pointerEvents: "none",
        zIndex: 1001,
        height: "100vh !important"
      },
      sidebar: {
        zIndex: 2,
        position: "absolute",
        top: 0,
        bottom: 0,
        transition: "transform .2s ease-in-out",
        WebkitTransition: "-webkit-transform .2s ease-in-out",
        willChange: "transform",
        overflowY: "auto",
        backgroundColor: "#fff",
        height: "100vh",
        padding: "0px",
        pointerEvents: "auto",
        overflow: "hidden",
        width: "90vw",
        boxShadow: "rgba(0, 0, 0, 0.25) 10px 0px 20px !important"
      },
      content: {
        position: "absolute",
        top: 20,
        left: 0,
        right: 0,
        bottom: 0,
        overflowY: "hidden",
        WebkitOverflowScrolling: "touch",
        transition: "left .2s ease-in-out, right .2s ease-in-out",
        pointerEvents: "none",
        height: "100vh"
      },
      overlay: {
        zIndex: 0,
        position: "fixed",
        top: 20,
        left: 0,
        right: 0,
        bottom: 0,
        opacity: 0,
        visibility: "hidden",
        transition: "opacity .2s ease-in-out, visibility .2s ease-in-out",
        backgroundColor: "rgba(0,0,0,0)",
        height: "100vh",
        pointerEvents: "none",
        overflow: "hidden"
      },
      dragHandle: {
        zIndex: 1,
        position: "fixed",
        top: 0,
        bottom: 0,
        pointerEvents: "auto"
      }
    };

    return (
      <Provider store={store}>
        <Router>
          <Route
            render={({ location }) => (
              <div id="app-container">
                <TransitionGroup>
                  <CSSTransition
                    key={location.key}
                    classNames="fade"
                    timeout={300}
                  >
                    <Switch location={location}>
                      <PublicRoute
                        exact
                        name="login"
                        path="/"
                        component={Main}
                        {...this.props}
                      />
                      <PublicRoute
                        exact
                        name="sign up"
                        path="/sign-up"
                        component={SignupPage}
                        {...this.props}
                      />
                      <PublicRoute
                        exact
                        name="forgot_password"
                        path="/forgot-password"
                        component={ForgotPasswordPage}
                        {...this.props}
                      />
                      <PublicRoute
                        exact
                        name="reset_password"
                        path="/reset-password/:token"
                        component={ResetPasswordPage}
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
                      <AuthenticatedRoute
                        exact
                        name="gender-pairing"
                        path="/gender-pairing"
                        component={GenderPairingPage}
                        onSetOpen={this.onSetSidebarOpen.bind(this)}
                        open={this.state.sidebarOpen}
                        {...this.props}
                      />
                      <AuthenticatedRoute
                        exact
                        name="photo-upload"
                        path="/photo-upload"
                        component={PhotoUploadPage}
                        onSetOpen={this.onSetSidebarOpen.bind(this)}
                        open={this.state.sidebarOpen}
                        {...this.props}
                      />
                      <AuthenticatedRoute
                        exact
                        name="user-profile"
                        path="/profile"
                        component={ProfilePage}
                        onSetOpen={this.onSetSidebarOpen.bind(this)}
                        open={this.state.sidebarOpen}
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
    authenticated: !loggingIn && !!Meteor.userId()
  });
}

export default merge(compose(getTrackerLoader(composer)))(
  injectDeps(context, actions)(App)
);
