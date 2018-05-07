import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  render() {
    const { title, path } = this.props;

    return (
      <div id="header-nav" className="row no-padding no-margin middle-xs">
        <div className="col-xs-12 header-nav-title">{title}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps)(Header);
