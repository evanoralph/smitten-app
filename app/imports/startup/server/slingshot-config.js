export default () => {
  Slingshot.createDirective('photoUploads', Slingshot.S3Storage, {
    bucket: Meteor.settings.AWS.awsS3Bucket,

    acl: 'public-read',
    AWSAccessKeyId: Meteor.settings.AWS.awsAccessId,
    AWSSecretAccessKey: Meteor.settings.AWS.awsSecretKey,
    region: Meteor.settings.AWS.awsRegion,

    authorize: function() {
      //Deny uploads if user is not logged in.
      if (!this.userId) {
        var message = 'Please login before posting files';
        throw new Meteor.Error('Login Required', message);
      }

      return true;
    },

    key: function(file, meta) {
      //Store file into a directory by the user's username.
      let type = file.name.split('.').slice(-1)[0];
      return `users/image/${meta.id}-${new Date().getTime()}.${type}`;
    },
  });
};
