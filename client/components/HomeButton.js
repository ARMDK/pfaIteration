import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const HomeButton = ({ setGameMode }) => {
  const navigate = useNavigate();
  const handleClickLogin = (e) => {
    e.preventDefault();
    navigate('/');
    setGameMode('mainPage');
  };
  return (
    <button onClick={handleClickLogin} className="homeButton">
      <img src="./GameBetterLogoHomeButton.png" height="140px" width="125px"></img>
    </button>
  );
};

export default HomeButton;
