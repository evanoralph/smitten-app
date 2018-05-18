import { compose, merge } from 'react-komposer';
import { useDeps } from 'react-simple-di-extra';
import Profile from './Profile';
import getTrackerLoader from '../../../../lib/getTrackerLoader';

function composer(props, onData) {
  const user = Meteor.user().profile;
  console.log(user)
  onData(null, { user });
}

const depsToPropsMapper = (context, actions) => ({
  context: context,
});

export default merge(compose(getTrackerLoader(composer)), useDeps(depsToPropsMapper))(Profile);
