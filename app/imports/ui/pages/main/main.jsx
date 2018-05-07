import React from 'react';
import { connect } from 'react-redux';
import HeaderNav from '../../components/header/header-nav/HeaderNav';

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
        <HeaderNav path="/main" title="meet cute" />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps)(Main);
