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
            validations={[email]}
          />
        </div>

        <div className="mg-top-15">
          <Input
            className="form-input text-center"
            value=""
            name="password"
            type="password"
            placeholder="Password"
            validations={[required]}
          />
        </div>

        <Button className="btn-pink-rounded">
          <i className="fa fa-fw fa-2x fa-envelope-o"></i>
          <span>LOG IN</span>
        </Button>
      </Form>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps)(LoginForm);
