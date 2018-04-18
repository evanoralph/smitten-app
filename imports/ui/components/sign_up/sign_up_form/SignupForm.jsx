import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import Button from 'react-validation/build/button';
import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { required, password, email } from '../../../../lib/validations';
import { getFormData } from '../../../../lib/helpers';

class SignupForm extends React.Component {
  signUpDefault(e) {
    e.preventDefault();
    const signupData = getFormData('#signup-form');
    this.props.signUpDefault(signupData);
  }

  signUpWithFacebook(e) {
    e.preventDefault();
    this.props.signUpWithFacebook();
  }

  render() {
    return (
      <div className="row center-xs">
        <Form id="signup-form" onSubmit={this.signUpDefault.bind(this)}>
          <div>
            <Input
              autoComplete="off"
              className="form-input text-center"
              value=""
              name="email"
              placeholder="E-Mail"
              validations={[email, required]}
            />
          </div>

          <div className="mg-top-10">
            <Input
              autoComplete="off"
              className="form-input text-center"
              value=""
              name="password"
              type="password"
              placeholder="Password"
              validations={[required]}
            />
          </div>

          <div className="mg-top-10">
            <Input
              autoComplete="off"
              className="form-input text-center"
              value=""
              name="confirm"
              type="password"
              placeholder="Confirm Password"
              validations={[required, password]}
            />
          </div>

          <Button className="btn-pink-rounded">
            <i className="fa fa-fw fa-2x fa-envelope-o"></i>
            <span>SIGN UP</span>
          </Button>
        </Form>
        <div className="signup-controls mg-top-10">
          <Link to="/forgot-password" className="text-purple">
            <small>Forgot your password?</small>
          </Link>
          <div className="no-margin">
            <p className="text-white ">Sign Up With</p>
            <button
              onClick={this.signUpWithFacebook.bind(this)}
              type="button"
              className="btn-facebook">
              <i className="fa fa-fw fa-facebook-square fa-2x"></i>
              <span>FACEBOOK</span>
            </button>
          </div>
          <div className="mg-top-10 mg-bot-20">
            <small className="text-white">Don't have an account? </small>
            <Link to="/" className="text-purple text-bold">
              <small>LOG IN</small>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps)(SignupForm);
