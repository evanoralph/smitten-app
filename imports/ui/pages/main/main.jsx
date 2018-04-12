import React from 'react';
import { connect } from 'react-redux';

import LogoHeader from '../../components/main/logo_header/LogoHeader';

class Main extends React.Component {
  render() {
    return (
      <div id="landing-page">
        <div className="row center-xs">
          <LogoHeader/>
        </div>
        <div className="row center-xs">

        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps)(Main);
