import React from 'react';
import HeaderNav from '../../components/header/header-nav/HeaderNav';
import GenderPairingContent from '../../components/gender_pairing/gender_pairing/GenderPairing';

const GenderPairing = props => (
  <div id="main-page" className="main-content row no-padding no-margin">
    <HeaderNav path="/main" title="meet cute" />
    <GenderPairingContent />
  </div>
);

export default GenderPairing;