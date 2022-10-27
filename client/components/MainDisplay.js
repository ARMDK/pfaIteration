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

  // const saveReactionTimeScore = (e) => {
  //   console.log('this is currentUser', currentUser.username);
  //   server
  //     .post('/game/scores', {
  //       username: currentUser.username,
  //       game_id: 1,
  //       top_score: currentSpeedScore,
  //     })
  //     .then((res) => {
  //       const { userHighScore, overallHighScore } = res.data;
  //       console.log('line 40 on main display ', res.data);
  //       setHighSpeedScore(userHighScore);
  //       setOverallHighSpeedScore(overallHighScore);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  // if (gameMode === 'reactionTime') {
  //   return (
  //     <div className='reactionTimeGame'>
  //       <ReactionTimeGame
  //         reactionTimeScore={reactionTimeScore}
  //         setReactionTimeScore={setReactionTimeScore}
  //         gameStarted={gameStarted}
  //         setGameStarted={setGameStarted}
  //         currentSpeedScore={currentSpeedScore}
  //         setCurrentSpeedScore={setCurrentSpeedScore}
  //       />
  //       {currentSpeedScore ? (
  //         <>
  //           <button onClick={saveReactionTimeScore}>save score</button>
  //         </>
  //       ) : null}
  //     </div>
  //   );
  // } else if (gameMode === 'numberMemoryGame') {
  //   return <NumberMemoryGame currentUser={currentUser} />;
  // }
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
          {/* <Login /> */}
          {/* <UserEnter /> */}
          <DashDisplay />

        </div>
    );
};

}

export default MainDisplay;
