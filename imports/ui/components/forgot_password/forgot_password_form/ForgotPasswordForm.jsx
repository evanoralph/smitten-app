import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import Button from 'react-validation/build/button';
import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { required, email } from '../../../../lib/validations';
import { getFormData } from '../../../../lib/helpers';

class ForgotPasswordForm extends React.Component {
  forgotPassword(e) {
    e.preventDefault();
    const email = getFormData('#forgot-password-form');
    console.log(email)
    // this.props.signUpDefault(signupData);
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

          <Button className="btn-pink-rounded">
            <span>RESET PASSWORD</span>
          </Button>
        </Form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps)(ForgotPasswordForm);
