import React from 'react';
import reelsyncLogo from '../assets/images/reelsync-logo.png';

const LandingPage = () => {
  return (
    <div className="logo-container">
      <img src={reelsyncLogo} alt="ReelSync" />
      <p className="tagline-primary">Where Brands Meet Creators</p>
      <p className="tagline-secondary">Create with Confidence</p>
    </div>
  );
};

export default LandingPage;