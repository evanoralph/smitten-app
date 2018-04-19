import swal from 'sweetalert2';
import signup from '../../pages/sign-up/signup';

export default {
  signUpDefault({ Meteor }, signupData, history) {
    Meteor.call('user.register', signupData, err => {
      if (!err) {
        swal('Success', 'You have successfully registered.', 'success').then(() => {
          history.push('/');
        });
      } else {
        swal(
          'Oops',
          `There was an error while trying to register. Please try again. Error: ${err.reason}`,
          'error'
        )
      }
    });
  },

  signUpWithFacebook({ Meteor }) {
    Meteor.loginWithFacebook(
      {
        loginStyle: 'popup',
        requestPermissions: ['basic_info', 'email'],
      },
      function(err, res) {
        if (!err) {
          console.log('Sign-up with facebook success!', res);
        } else {
          swal(
            'Oops',
            `There was an error while trying to sign up with Facebook. Please try again. Error: ${err.reason}`,
            'error'
          );
        }
      }
    );
  },
};
