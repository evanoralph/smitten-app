import React from 'react';
import { connect } from 'react-redux';
import HeaderSettings from '../../components/header/header-settings/HeaderSettings';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showHeader: true,
      currentUser: props.currentUser,
    };
  }

  render() {
    return (
      <div id="main-page" className="main-content row no-padding no-margin">
        <HeaderSettings onSetOpen={this.props.onSetOpen} open={this.props.open} />

      </div>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps)(Main);
