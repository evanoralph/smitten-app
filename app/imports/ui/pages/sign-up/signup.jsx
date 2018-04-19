import React from 'react';
import { connect } from 'react-redux';

import LogoHeader from '../../components/main/logo_header/LogoHeader';
import SignupForm from '../../components/sign_up/sign_up_form/SignupFormContainer';

class Signup extends React.Component {
  render() {
    return (
      <div id="sign-up-page" className="main-content">
        <div className="row center-xs">
          <LogoHeader />
        </div>
        <div className="row center-xs">
          <SignupForm />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps)(Signup);
