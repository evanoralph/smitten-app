import { Accounts } from 'meteor/accounts-base';

export default () => {
  Accounts.urls.resetPassword = function(token) {
    return Meteor.absoluteUrl(`reset-password/${token}`);
  };
  Accounts.onCreateUser(function(options, user) {
    const userHandler = user;
    const userId = user._id;

    console.log('User', user);

    if (user.services) {
      // const verificationCode = Meteor.uuid().substring(0, 4);
      const userData = Meteor.users.findOne({ _id: userId });
      if (!userData && user.services.facebook) {
        if (user.profile && !user.profile.newReg) {
          userHandler.profile = {
            firstName: user.services.facebook.first_name,
            lastName: user.services.facebook.last_name,
          };
        }
      }
      if (!userData && user.services.google) {
        if (user.profile && !user.profile.newReg) {
          userHandler.profile = {
            firstName: user.services.google.given_name,
            lastName: user.services.google.family_name,
          };
        }
      }
      // userHandler.credits = 1500;
      // userHandler.verificationCode = verificationCode;
    }

    if (user.services.google || user.services.facebook) {
      const service = _.keys(user.services)[0];
      const email = user.services[service].email;

      const existingUser = Meteor.users.findOne({ 'emails.address': email });

      if (!existingUser) return userHandler;

      // precaution, these will exist from accounts-password if used
      if (!existingUser.services) existingUser.services = { resume: { loginTokens: [] } };
      if (!existingUser.services.resume) existingUser.services.resume = { loginTokens: [] };

      console.log(user.services.resume);
      // copy across new service info
      existingUser.services[service] = user.services[service];

      // existingUser.services.resume.loginTokens.push(
      //   user.services.resume.loginTokens[0]
      // );

      // even worse hackery
      Meteor.users.remove({ _id: existingUser._id }); // remove existing record
      return existingUser;
    } else {
      return userHandler;
    }
  });

  // let loginAttemptVerifier = function(parameters) {
  //   throw new Meteor.Error(500, 'Login Failed');
  //   return false;
  // }
  //
  // Accounts.validateLoginAttempt(loginAttemptVerifier);
};
