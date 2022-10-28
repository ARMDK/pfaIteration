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
      
        <button onClick={handleClickTopScores} className="navRight">
          <h3>Scores</h3>
        </button>
      
    );
}

export default TopScoresButton;