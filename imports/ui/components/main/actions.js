export default {
  loginDefault({ Meteor }, loginData) {
    Meteor.loginWithPassword(loginData.email, loginData.password, (err) => {
      if (!err) {
        console.log('Login with Default Process', loginData);
      } else {
        console.log(err)
      }
    })

  },

  loginWithFacebook({ Meteor }) {
    console.log('Login with Facebook Process');
  }
}