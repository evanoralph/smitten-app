// Methods for users
Meteor.methods({
  'user.register': function(signupData) {
    const { email, password } = signupData;

    const user = Accounts.createUser({
      email,
      password,
      profile: {}
    });

    return user;
  }
})