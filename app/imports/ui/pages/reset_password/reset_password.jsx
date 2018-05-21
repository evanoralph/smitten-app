import React from 'react';
import { connect } from 'react-redux';
import LogoHeader from '../../components/login/logo_header/LogoHeader';
import ResetPasswordForm from '../../components/reset_password/reset_password_form/ResetPasswordFormContainer';

class ResetPassword extends React.Component {
  render() {
    return (
      <div id="forgot-password-page" className="main-content">
        <div className="row center-xs">
          <LogoHeader />
        </div>
        <div className="row center-xs">
          <ResetPasswordForm />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps)(ResetPassword);
