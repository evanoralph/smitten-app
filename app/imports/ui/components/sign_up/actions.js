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
    console.log('Sign-up with Facebook Process');
  },
};
