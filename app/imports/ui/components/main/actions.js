export default {
  loginDefault({ Meteor }, loginData, history) {
    Meteor.loginWithPassword(loginData.email, loginData.password, err => {
      if (!err) {
        console.log('Login with Default Process', loginData);
        history.push('/main');
      } else {
        console.log(err);
      }
    });
  },

  loginWithFacebook({ Meteor }) {
    Meteor.loginWithFacebook(
      {
        loginStyle: 'popup',
        requestPermissions: ['basic_info', 'email'],
      },
      function(err, res) {
        if (!err) {
          console.log('Login with facebook success!', res);
        } else {
          console.log(err.reason);
        }
      }
    );
  },
};
