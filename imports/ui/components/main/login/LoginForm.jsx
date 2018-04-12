import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import Button from 'react-validation/build/button';
import React from 'react';
import { connect } from 'react-redux';
import { required, password, email } from '../../../../lib/validations';

class LoginForm extends React.Component {
  render() {
    return (
      <Form id="login-form" className="mg-top-50">
        <div>
          <Input
            className="form-input text-center"
            value=""
            name="email"
            placeholder="E-Mail"
            validations={[email]} />
        </div>

        <div className="mg-top-15">
          <Input
            className="form-input text-center"
            value=""
            name="password"
            type="password"
            placeholder="Password"
            validations={[required]} />
        </div>

        <div className="mg-top-10">
          <Button className="submit-button">LOG IN</Button>
        </div>
      </Form>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps)(LoginForm);
