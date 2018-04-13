export default {
  loginDefault({ Meteor }, loginData) {
    console.log('Login with Default Process', loginData);
  },

  loginWithFacebook() {
    console.log('Login with Facebook Process');
  }
}