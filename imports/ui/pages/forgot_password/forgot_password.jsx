import React from 'react';
import { connect } from 'react-redux';

import LogoHeader from '../../components/main/logo_header/LogoHeader';
import ForgotPasswordForm from '../../components/forgot_password/forgot_password_form/ForgotPasswordFormContainer';

class ForgotPassword extends React.Component {
  render() {
    return (
      <div id="forgot-password-page" className="main-content">
        <div className="row center-xs">
          <LogoHeader />
        </div>
        <div className="row center-xs">
          <ForgotPasswordForm />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps)(ForgotPassword);
