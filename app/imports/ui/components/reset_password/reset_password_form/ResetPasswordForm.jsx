import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import Button from 'react-validation/build/button';
import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { required, password } from '../../../../lib/validations';
import { getFormData } from '../../../../lib/helpers';

class ResetPasswordForm extends React.Component {
  resetPassword(e) {
    e.preventDefault();
    const password = getFormData('#reset-password-form');
    password.token = this.props.token;

    this.props.resetPassword(password, this.props.history);
  }

  render() {
    return (
      <div className="row center-xs">
        <Form id="reset-password-form" onSubmit={this.resetPassword.bind(this)}>
          <div>
            <Input
              autoComplete="off"
              type="password"
              className="form-input text-center"
              value=""
              name="password"
              placeholder="Enter new password"
              validations={[required]}
            />
          </div>

          <div className="mg-top-10">
            <Input
              autoComplete="off"
              type="password"
              className="form-input text-center"
              value=""
              name="confirm_password"
              placeholder="Confirm new password"
              validations={[password, required]}
            />
          </div>

          <Button className="btn-pink-rounded">RESET PASSWORD</Button>
        </Form>
      </div>
    );
  }
}

const ResetPassWithRouter = withRouter(ResetPasswordForm);
const mapStateToProps = state => state;
export default connect(mapStateToProps)(ResetPassWithRouter);
