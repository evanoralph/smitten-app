import React from 'react';
import GenderInterestButton from '../../gender_pairing/gender_interests/GenderInterestButton';

class Profile extends React.Component {
  render() {
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
            </div>
          </div>
          <div className="row start-xs profile-content">
            <div className="col-xs-12">
              <h4 className="mg-left-10">I&#39;M INTERESTED IN</h4>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
