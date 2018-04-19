import swal from "sweetalert2";

export default {
  loginDefault({ Meteor }, loginData, history) {
    Meteor.loginWithPassword(loginData.email, loginData.password, err => {
      if (err) {
        swal(
          'Oops',
          `There was an error while trying to register. Please try again. Error: ${err.reason}`,
          'error'
        )
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
