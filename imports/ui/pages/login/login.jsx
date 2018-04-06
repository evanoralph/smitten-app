import React from 'react';
import LoginForm from '../../components/login/login-form-container.js';

class Login extends React.Component {
  render() {
    return (
      <div id="login">
        <h2>Login</h2>
        <LoginForm />
      </div>
    );
  }
}

export default Login;
