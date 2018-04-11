import React from 'react';
import { connect } from 'react-redux';
import Carousel from '../../components/main/Carousel';

class Main extends React.Component {
  render() {
    return (
      <div id="landing-page">
        <div className="row center-xs">
          <div className="col-xs-12">
            <h2>HELLO SMITTEN</h2>
            <Carousel/>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps)(Main);
