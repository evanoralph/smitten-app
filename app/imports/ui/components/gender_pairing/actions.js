export default {
  setGenderPairing({ Meteor }, gender, interest, ageRange, history) {
    Meteor.call('user.setGenderPairing', gender, interest, ageRange, function(err, res) {
      if (!err) {
        history.push('/photo-upload');
      }
    });
  },
};
