import React from 'react';
import HeaderNav from '../../components/header/header-nav/HeaderNavContainer';
import ProfileContent from '../../components/profile/profile/ProfileContainer';

const Profile = props => (
  <div id="profile-page" className="main-content row no-padding no-margin">
    <HeaderNav path="/main" title="profile" />
    <ProfileContent />
  </div>
);

export default Profile;
