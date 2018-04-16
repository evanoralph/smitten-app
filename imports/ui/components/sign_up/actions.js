export default {
  signUpDefault({ Meteor }, signupData) {
    Meteor.call('user.register', signupData, (err) => {
      if (!err) {
        console.log('Sign-up with Default Process', signupData);
      } else {
        console.log(err)
      }
    })
  },

  signUpWithFacebook({ Meteor }) {
    console.log('Sign-up with Facebook Process');
  }
}