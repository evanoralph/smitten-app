import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import Button from 'react-validation/build/button';
import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { required, email } from '../../../../lib/validations';
import { getFormData } from '../../../../lib/helpers';

class LoginForm extends React.Component {
  loginDefault(e) {
    e.preventDefault();
    const loginData = getFormData('#login-form');

    this.props.loginDefault(loginData, this.props.history);
  }

  loginWithFacebook(e) {
    e.preventDefault();
    this.props.loginWithFacebook();
  }

  render() {
    return (
      <div className="row center-xs">
        <Form id="login-form" ref={c => (this.form = c)} onSubmit={this.loginDefault.bind(this)}>
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

          <Button className="btn-pink-rounded">
            <i className="fa fa-fw fa-2x fa-envelope-o" />
            <span>LOG IN</span>
          </Button>
        </Form>
        <div className="login-controls mg-top-10">
          <Link to="/forgot-password" className="text-purple">
            <small>Forgot your password?</small>
          </Link>
          <div className="no-margin">
            <p className="text-white ">Log In With</p>
            <button
              onClick={this.loginWithFacebook.bind(this)}
              type="button"
              className="btn-facebook"
            >
              <i className="fa fa-fw fa-facebook-square fa-2x" />
              <span>FACEBOOK</span>
            </button>
          </div>
          <div className="mg-top-10">
            <small className="text-white">Don't have an account? </small>
            <Link to="/sign-up" className="text-purple text-bold">
              <small>SIGN UP</small>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

const LoginFormWithRouter = withRouter(LoginForm);
const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps)(LoginFormWithRouter);
