import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const TopScoresButton = ({ setGameMode }) => {
    const navigate = useNavigate();
    const handleClickTopScores = (e) => {
      e.preventDefault();
      navigate('/game/scores');
      setGameMode('topScores');
    };
    return (
      <button onClick={handleClickTopScores} className="navRight topScores">
        <h3>Top Scores</h3>
      </button>
    );
}

export default TopScoresButton;