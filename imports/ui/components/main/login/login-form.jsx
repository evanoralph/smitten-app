import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import Button from 'react-validation/build/button';
import React from 'react';
import { connect } from 'react-redux';
import { required, password, email } from '../../../../lib/validations';

class LoginForm extends React.Component {
  render() {
    return (
      <Form>
        <h3>Login</h3>
        <div>
          <label>
            Email*
            <Input value="email@email.com" name="email" validations={[required, email]} />
          </label>
        </div>
        <div>
          <label>
            Password*
            <Input type="password" name="password" validations={[required]} />
          </label>
        </div>
        <div>
          <Button>Submit</Button>
        </div>
      </Form>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps)(LoginForm);
