import { compose, merge } from 'react-komposer';
import { useDeps } from 'react-simple-di-extra';
import PhotoUpload from './PhotoUpload';
import getTrackerLoader from '../../../../lib/getTrackerLoader';

function composer(props, onData) {
  const fromFacebook = Meteor.user() && Meteor.user().profile && Meteor.user().profile.gender;

  onData(null, { fromFacebook });
}

const depsToPropsMapper = (context, actions) => ({
  context: context,
  uploadPhoto: actions.photo_upload.uploadPhoto
});

export default merge(compose(getTrackerLoader(composer)), useDeps(depsToPropsMapper))(PhotoUpload);
