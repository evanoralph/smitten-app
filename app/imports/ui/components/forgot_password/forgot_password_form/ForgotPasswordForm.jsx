import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import Button from "react-validation/build/button";
import React from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";

import { required, email } from "../../../../lib/validations";
import { getFormData } from "../../../../lib/helpers";

class ForgotPasswordForm extends React.Component {
  forgotPassword(e) {
    e.preventDefault();
    const email = getFormData("#forgot-password-form");

    this.props.forgotPassword(email, this.props.history);
  }

  goToLogin(e) {
    e.preventDefault();
    this.props.history.push('/');
  }

  render() {
    return (
      <div className="row center-xs">
        <Form
          id="forgot-password-form"
          onSubmit={this.forgotPassword.bind(this)}
        >
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

          <Button className="btn-rounded bg-pink mg-top-20">
            RESET PASSWORD
          </Button>
        </Form>
        <div className="col-xs-8 mg-top-10">
          <button
            onClick={this.goToLogin.bind(this)}
            type="button"
            className="btn-rounded bg-pink">
            BACK TO LOGIN PAGE
          </button>
        </div>
      </div>
    );
  }
}

const ForgotPassWithRouter = withRouter(ForgotPasswordForm);
const mapStateToProps = state => state;
export default connect(mapStateToProps)(ForgotPassWithRouter);
