import React, { useState } from 'react';
import SignUp from './SignUp';
import Login from './Login';
import DashDisplay from './DashDisplay';

// import ReactionTimeButton from './ReactionTimeButton';
// import NumberMemoryButton from './NumberMemoryButton';
// import StatsContainer from './StatsContainer';
// import VerbalMemory from './VerbalMemory';
// import ReactionTimeGame from './ReactionTimeGame';
//import NumberMemoryGame from './NumberMemoryGame';
//import HomeButton from './HomeButton';
// import TopScores from './TopScores'

import axios from 'axios';
import UserEnter from './UserEnter';

const server = axios.create({
  baseURL: 'http://localhost:3000/',
});

const MainDisplay = ({
  gameMode,
  setGameMode,
  setCurrentUser,
  currentUser,
  setCurrentSpeedScore,
  currentSpeedScore,
  setHighSpeedScore,
  setOverallHighSpeedScore,
}) => {
  console.log('current gameMode state', gameMode);
  const [reactionTimeScore, setReactionTimeScore] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);

   if (gameMode === 'signUp') {
    return (
      <>
        <SignUp setGameMode={setGameMode} />
      </>
    );
  } else if (gameMode === 'login') {
    return (
      <>
        <Login
          gameMode={gameMode}
          setGameMode={setGameMode}
          setCurrentUser={setCurrentUser}
        />
      </>
    );
  } 
  else if (gameMode === 'topScores') {
    return (
      <div>
        <TopScores 
          gameMode={gameMode}
          setGameMode={setGameMode} 
        />
      </div>
    )
  } 
  else if (gameMode === 'dashboard'){
    return (
      <div>
        <DashDisplay />
      </div>
    )
  }
  else {
    return (
        <div className='FrontPage'>
          <UserEnter />
        </div>
    );
};

}

export default MainDisplay;
