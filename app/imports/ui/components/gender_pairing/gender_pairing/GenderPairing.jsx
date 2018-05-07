import React from 'react';
import GenderInterest from '../gender_interests/GenderInterestButton';

class GenderPairingContent extends React.Component {
  render() {
    return (
      <div className="row start-xs content-page">
        <div className="col-xs-12">
          <p className="mg-top-30 mg-left-10">ADDITIONAL QUESTIONS</p>
          <div className="row center-xs">
            <div className="col-xs-12">
              <p>I&#39;M INTERESTED IN</p>
            </div>
            <div className="col-xs-12">
              <GenderInterest name="Men" />
            </div>
            <div className="col-xs-12 mg-top-10">
              <GenderInterest name="Women" />
            </div>
            <div className="col-xs-12 mg-top-10">
              <GenderInterest name="Men & Women" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default GenderPairingContent;
