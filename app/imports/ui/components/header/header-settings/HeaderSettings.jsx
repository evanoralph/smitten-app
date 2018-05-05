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
        <div className="col-xs-12 header-nav-left-button">
          {/*<Link to={'/main'}>*/}
            {/*<span className="logo-header">*/}
              {/*<img src="/assets/heart+arrow(logo).svg" />*/}
            {/*</span>*/}
          {/*</Link>*/}
          {/*<i*/}
            {/*onClick={this.toggleMenu.bind(this)}*/}
            {/*className="fa fa-fw fa-2x fa-gear fa-pull-right settings-button"*/}
          {/*/>*/}
        </div>
        {/*<div className="menu-header" onClick={this.toggleMenu.bind(this)} />*/}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps)(HeaderSettings);
