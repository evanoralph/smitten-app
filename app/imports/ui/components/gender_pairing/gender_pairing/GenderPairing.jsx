import React from 'react';
import GenderInterest from '../gender_interests/GenderInterestButton';

class GenderPairingContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      interests: '',
      ageMin: 18,
      ageMax: 25,
    };
  }

  changeGenderInterest(type) {
    this.setState({ interests: type });
  };

  render() {
    const { interests } = this.state;
    return (
      <div id="gender-pairing-page" className="row start-xs content-page">
        <div className="col-xs-12">
          <p className="mg-top-30 mg-left-10 gp-header">ADDITIONAL QUESTIONS</p>
          <div className="row center-xs">
            <div className="col-xs-12">
              <p>I&#39;M INTERESTED IN</p>
            </div>
            <div className="col-xs-12">
              <GenderInterest
                handleClick={this.changeGenderInterest.bind(this, 'men')}
                activeBtn={interests}
                name="men"
                label="Men"
              />
            </div>
            <div className="col-xs-12 mg-top-10">
              <GenderInterest
                handleClick={this.changeGenderInterest.bind(this, 'women')}
                activeBtn={interests}
                name="women"
                label="Women"
              />
            </div>
            <div className="col-xs-12 mg-top-10">
              <GenderInterest
                handleClick={this.changeGenderInterest.bind(this, 'men-and-women')}
                activeBtn={interests}
                name="men-and-women"
                label="Men & Women"
              />
            </div>
            <div className="col-xs-12 mg-top-20">
              <p>AGE RANGE</p>
            </div>
            {/* React Slider */}
          </div>
        </div>
      </div>
    );
  }
}

export default GenderPairingContent;
