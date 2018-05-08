import React from 'react';

const GenderInterestButton = ({ handleClick, label, name, activeBtn }) => (
  <button
    onClick={handleClick}
    className={`gender-interest-button ${activeBtn === name && 'active'}`}
  >
    {label}
  </button>
);

export default GenderInterestButton;
