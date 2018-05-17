// Methods for users
Meteor.methods({
  'user.register'(signupData) {
    const { email, password } = signupData;

    const user = Accounts.createUser({
      email,
      password,
      profile: {},
    });

    return user;
  },

  'user.setGenderPairing'(gender, interest, ageRange) {
    const userId = this.userId;
    const [minAge, maxAge] = ageRange;

    Meteor.users.update(
      { _id: userId },
      {
        $set: {
          profile: {
            gender,
            interest,
            ageRange: {
              minAge,
              maxAge,
            },
          },
        },
      }
    );
  },

  'user.updateImage'(imgUrl) {
    const userId = this.userId;
    Meteor.users.update(
      { _id: userId },
      {
        $set: {
          avatar: imgUrl,
        },
      }
    );
  },
});
