import { compose, merge } from 'react-komposer';
import { useDeps } from 'react-simple-di-extra';
import ResetPasswordForm from './ResetPasswordForm';
import getTrackerLoader from '../../../../lib/getTrackerLoader';

function composer(props, onData) {
  onData(null, { token: props.token });
}

const depsToPropsMapper = (context, actions) => ({
  context: context,
  resetPassword: actions.reset_password.resetPassword,
});

export default merge(compose(getTrackerLoader(composer)), useDeps(depsToPropsMapper))(
  ResetPasswordForm
);
