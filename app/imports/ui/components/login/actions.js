import swal from 'sweetalert2';

export default {
  loginDefault({ Meteor }, loginData, history) {
    Meteor.loginWithPassword(loginData.email, loginData.password, (err, res) => {
      if (err) {
        swal(
          'Oops',
          `There was an error while trying to register. Please try again. Error: ${err.reason}`,
          'error'
        );
      } else {
        if (Meteor.user() && Meteor.user().profile && Meteor.user().profile.interest) {
          history.push('/gender-pairing');
        } else {
          history.push('/gender-pairing');
        }
      }
    });
  },

  loginWithFacebook({ Meteor }, history) {
    Meteor.loginWithFacebook(
      {
        loginStyle: 'redirect',
        requestPermissions: ['public_profile', 'email'],
      },
      function(err, res) {
        if (!err) {
          console.log('Login with facebook success!', res);
          if (Meteor.user() && Meteor.user().profile && Meteor.user().profile.interest) {
            console.log(Meteor.user());
          } else {
            history.push('/gender-pairing')
          }
        } else {
          console.log(err);
          swal(
            'Oops',
            `There was an error while trying to login with Facebook. Please try again. Error: ${
              err.reason
            }`,
            'error'
          );
        }
      }
    );
  },
};
