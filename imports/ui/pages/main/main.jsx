import React from 'react';
import { connect } from 'react-redux';

class Main extends React.Component {
  render() {
    return (
      <div id="landing-page">
        <h2>Landing Page</h2>

      </div>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps)(Main);
