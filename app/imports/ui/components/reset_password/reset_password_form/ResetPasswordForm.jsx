import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import Button from 'react-validation/build/button';
import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { required, email } from '../../../../lib/validations';
import { getFormData } from '../../../../lib/helpers';

class ResetPasswordForm extends React.Component {
  forgotPassword(e) {
    e.preventDefault();
    const email = getFormData('#forgot-password-form');

    this.props.forgotPassword(email, this.props.history);
  }

  render() {
    return (
      <div className="row center-xs">
        <Form id="forgot-password-form" onSubmit={this.forgotPassword.bind(this)}>
          <div>
            <Input
              autoComplete="off"
              className="form-input text-center"
              value=""
              name="email"
              placeholder="Enter your e-mail"
              validations={[email, required]}
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
