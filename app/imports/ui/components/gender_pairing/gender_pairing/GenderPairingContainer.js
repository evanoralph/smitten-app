import { compose, merge } from 'react-komposer';
import { useDeps } from 'react-simple-di-extra';
import GenderPairing from './GenderPairing';
import getTrackerLoader from '../../../../lib/getTrackerLoader';

function composer(props, onData) {
  onData(null, {});
}

const depsToPropsMapper = (context, actions) => ({
  context: context,
  loginDefault: actions.login.loginDefault,
  loginWithFacebook: actions.login.loginWithFacebook,
});

export default merge(compose(getTrackerLoader(composer)), useDeps(depsToPropsMapper))(
  GenderPairing
);
