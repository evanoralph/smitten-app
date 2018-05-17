import React from 'react';
import Range from 'rc-slider/lib/Range';
import 'rc-slider/assets/index.css';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import GenderInterest from '../gender_interests/GenderInterestButton';

class GenderPairingContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gender: '',
      interests: '',
      ageRange: [20, 25],
    };
  }

  setAgeRange(ageRange) {
    this.setState({ ageRange });
  }

  changeGender(gender) {
    this.setState({ gender });
  }

  changeGenderInterest(interests) {
    this.setState({ interests });
  }

  setGenderPairing() {
    const { interests, ageRange, gender } = this.state;
    const genderInput = this.props.fromFacebook ? Meteor.user().profile.gender : gender;
    this.props.setGenderPairing(genderInput, interests, ageRange, this.props.history);
  }

  render() {
    const { interests, ageRange, gender } = this.state;
    const { fromFacebook } = this.props;
    return (
      <div id="gender-pairing-page" className="row start-xs content-page">
        <div className="col-xs-12">
          {fromFacebook && (
            <p className="mg-top-30 mg-left-10 gp-header">ADDITIONAL QUESTIONS</p>
          )}
          <div className={`row center-xs ${!fromFacebook && 'mg-top-20'}`}>
            {!fromFacebook && (
              <div>
                <div className="col-xs-12">
                  <p>I&#39;M A</p>
                </div>
                <div className="col-xs-12">
                  <GenderInterest
                    handleClick={this.changeGender.bind(this, 'male')}
                    activeBtn={gender}
                    name="male"
                    label="Man"
                  />
                  <div className="col-xs-12 mg-top-10">
                    <GenderInterest
                      handleClick={this.changeGender.bind(this, 'female')}
                      activeBtn={gender}
                      name="female"
                      label="Woman"
                    />
                  </div>
                </div>
              </div>
            )}
            <div className="col-xs-12 mg-top-10">
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
            <div className="col-xs-8 rc-range-cont">
              <div className="col-xs-8">
                <Range
                  min={18}
                  max={50}
                  step={1}
                  defaultValue={ageRange}
                  onChange={this.setAgeRange.bind(this)}
                />
              </div>
              <div className="col-xs-4">{ageRange.join('-')}</div>
            </div>
            <div className="col-xs-10 upload-button">
              <button onClick={this.setGenderPairing.bind(this)} className="btn-pink-rounded">
                Done, let&#39;s take a photo!
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const GenderPairingWithRouter = withRouter(GenderPairingContent);
const mapStateToProps = state => state;

export default connect(mapStateToProps)(GenderPairingWithRouter);
