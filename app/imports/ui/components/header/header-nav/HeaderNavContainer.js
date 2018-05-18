import { compose, merge } from 'react-komposer';
import HeaderNav from './HeaderNav';
import getTrackerLoader from '../../../../lib/getTrackerLoader';
import { useDeps } from 'react-simple-di-extra';

function composer(props, onData) {
  onData(null, {});
}

const depsToPropsMapper = (context, actions) => ({
  context: context,
});

export default merge(compose(getTrackerLoader(composer)), useDeps(depsToPropsMapper))(HeaderNav);
