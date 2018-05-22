import swal from 'sweetalert2';

export default {
  resetPassword({ Meteor }, data, history) {
    Accounts.resetPassword(data.token, data.password, err => {
      if (!err) {
        swal('Success', 'You have successfully changed your password', 'success').then(() => {
          history.replace('/profile');
        });
      } else {
        swal('Error', 'Something went wrong. Please try again', 'error');
      }
    });
  },
};
