import swal from 'sweetalert2';

export default {
  forgotPassword({ Meteor }, data, history) {

    Accounts.forgotPassword({ email: data.email }, function(err) {
      if (err) {
        if (err.message === 'User not found [403]') {
          swal('Error', 'This email does not exist.', 'error');
        } else {
          console.log(err)
          swal('Error', 'Something went wrong while requesting a forgot password email.', 'error');
        }
      } else {
        swal('Email Sent', 'Check your e-mail for the reset password link', 'success')
          .then(() => {
            history.push('/');
          });
      }
    });
    // Generate token in email
  }
}