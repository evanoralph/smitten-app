import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { Link } from 'react-router-dom';

class HeaderSettings extends React.Component {
  toggleMenu() {
    this.props.onSetOpen(!this.props.open);
  }

  render() {
    return (
      <div id="header-settings" className="row no-padding no-margin center-xs">
        <div className="col-xs-6 header-nav-left-button">
          <Link to={'/main'}>
            <span className="logo-header">
              Smitten
              {/*<img src="/assets/smitten (logo text).svg" />*/}
            </span>
          </Link>
        </div>
        <div className="menu-header" onClick={this.toggleMenu.bind(this)} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps)(HeaderSettings);
