import React from 'react';
import { connect } from 'react-redux';

import LogoHeader from '../../components/main/logo_header/LogoHeader';
import LoginForm from '../../components/main/login/LoginFormContainer';

class Main extends React.Component {
  render() {
    return (
      <div id="landing-page" className="main-content">
        <div className="row center-xs">
          <LogoHeader />
        </div>
        <div className="row center-xs">
          <LoginForm />
          <div className="login-controls mg-top-10">
            <a href="/forgot-password" className="text-purple">
              <small>Forgot your password?</small>
            </a>
            <div className="no-margin">
              <p className="text-white ">Log In With</p>
              <button type="button" className="btn-facebook">
                <i className="fa fa-fw fa-facebook-square fa-2x"></i>
                <span>FACEBOOK</span>
              </button>
            </div>
            <div className="mg-top-10">
              <small className="text-white">Don't have an account? </small>
              <a href="/sign-up" className="text-pink text-bold">
                <small>SIGN UP</small>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps)(Main);