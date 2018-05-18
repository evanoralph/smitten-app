import React from 'react';

const GenderInterestButton = ({ handleClick, label, name, activeBtn, extraClass }) => (
  <button
    onClick={handleClick}
    className={`gender-interest-button ${activeBtn === name && 'active'} ${extraClass}`}
  >
    {label}
  </button>
);

export default GenderInterestButton;
