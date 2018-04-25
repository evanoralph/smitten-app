import { compose, merge } from 'react-komposer';
import LoginForm from './LoginForm';
import getTrackerLoader from '../../../../lib/getTrackerLoader';
import { useDeps } from 'react-simple-di-extra';

function composer(props, onData) {
  onData(null, {});
}

const depsToPropsMapper = (context, actions) => ({
  context: context,
  loginDefault: actions.login.loginDefault,
  loginWithFacebook: actions.login.loginWithFacebook
});

export default merge(compose(getTrackerLoader(composer)), useDeps(depsToPropsMapper))(LoginForm);
