import React from 'react';
import Range from 'rc-slider/lib/Range';
import 'rc-slider/assets/index.css';
import GenderInterestButton from '../../gender_pairing/gender_interests/GenderInterestButton';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gender: props.user.gender,
      interests: props.user.interest,
      ageRange: [props.user.ageRange.minAge, props.user.ageRange.maxAge],
    };
  }

  setAgeRange(ageRange) {
    this.setState({ ageRange });
  }

  changeGenderInterest(interests) {
    this.setState({ interests });
  }

  showProfileImages() {

  }

  render() {
    const { ageRange, interests, gender } = this.state;
    return (
      <div id="profile-page" className="row start-xs content-page">
        <div className="col-xs-12">
          <div className="row center-xs main-profile-image">
            <div className="col-xs-12 mg-top-10">
              <img src={this.props.user.avatar} alt="" />
            </div>
            <div className="row between-xs profile-images mg-top-10">
              <div className="col-xs">
                <img src={this.props.user.avatar} alt="" />
              </div>
              <div className="col-xs">
                <img src={this.props.user.avatar} alt="" />
              </div>
              <div className="col-xs">
                <img src={this.props.user.avatar} alt="" />
              </div>
              <div className="col-xs">
                <img src={this.props.user.avatar} alt="" />
              </div>
            </div>
          </div>
          <div className="row start-xs profile-content">
            <div className="col-xs-6">
              <h4 className="mg-left-10">I&#39;m interested in</h4>
            </div>
            <div className="col-xs-6 mg-top-15">
              <GenderInterestButton
                handleClick={this.changeGenderInterest.bind(this, 'men')}
                activeBtn={interests}
                name="men"
                label="Men"
              />
              <GenderInterestButton
                handleClick={this.changeGenderInterest.bind(this, 'women')}
                activeBtn={interests}
                name="women"
                label="Women"
                extraClass="mg-top-5"
              />
              <GenderInterestButton
                handleClick={this.changeGenderInterest.bind(this, 'men-and-women')}
                activeBtn={interests}
                name="men-and-women"
                label="Men and Women"
                extraClass="mg-top-5"
              />
            </div>
            <div className="col-xs-12">
              <h4 className="mg-left-10">Age Range</h4>
            </div>
          </div>
          <div className="row center-xs">
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
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
