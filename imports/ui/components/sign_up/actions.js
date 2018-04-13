export default {
  signUpDefault({ Meteor }, signupData) {
    console.log('Sign-up with Default Process', signupData);
  },

  signUpWithFacebook({ Meteor }) {
    console.log('Sign-up with Facebook Process');
  }
}