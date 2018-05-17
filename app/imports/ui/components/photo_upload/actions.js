import swal from 'sweetalert2';

export default {
  uploadPhoto({ Meteor }, file, history) {
    let id = Meteor.userId();

    var uploader = new Slingshot.Upload('photoUploads', { id });

    file.id = id;

    uploader.send(file, function(error, downloadUrl) {
      if (error) {
        // Log service detailed response.
        console.log(error)
      } else {
        Meteor.call('user.updateImage', downloadUrl, id, function(err) {
          if (!err) {
            history.push('/profile')
          }
        });
        console.log(downloadUrl);
      }
    });
  },
};
