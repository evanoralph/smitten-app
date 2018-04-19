import React from 'react';
import { connect } from 'react-redux';

import LogoHeader from '../../components/main/logo_header/LogoHeader';
import LoginForm from '../../components/main/login_form/LoginFormContainer';

class Main extends React.Component {
  render() {
    return (
      <div id="landing-page" className="main-content">
        <div className="row center-xs">
          <LogoHeader />
        </div>
        <div className="row center-xs">
          <LoginForm />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps)(Main);
