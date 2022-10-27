// Not connected yet
import React, { useState } from 'react';
import ReactionTimeButton from './ReactionTimeButton';
import NumberMemoryButton from './NumberMemoryButton';
import StatsContainer from './StatsContainer';
import VerbalMemory from './VerbalMemory';
import ReactionTimeGame from './ReactionTimeGame';
import NumberMemoryGame from './NumberMemoryGame';
import HomeButton from './HomeButton';
import TopScores from './TopScores'

import axios from 'axios';

const server = axios.create({
  baseURL: 'http://localhost:3000/',
});

const DashDisplay = ({
  gameMode,
  setGameMode,
  setCurrentUser,
  currentUser,
  setCurrentSpeedScore,
  currentSpeedScore,
  setHighSpeedScore,
  setOverallHighSpeedScore,
}) => {
  const saveReactionTimeScore = (e) => {
    console.log('this is currentUser', currentUser.username);
    server
      .post('/game/scores', {
        username: currentUser.username,
        game_id: 1,
        top_score: currentSpeedScore,
      })
      .then((res) => {
        const { userHighScore, overallHighScore } = res.data;
        console.log('line 40 on main display ', res.data);
        setHighSpeedScore(userHighScore);
        setOverallHighSpeedScore(overallHighScore);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  if (gameMode === 'reactionTime') {
    return (
      <div className='reactionTimeGame'>
        <ReactionTimeGame
          reactionTimeScore={reactionTimeScore}
          setReactionTimeScore={setReactionTimeScore}
          gameStarted={gameStarted}
          setGameStarted={setGameStarted}
          currentSpeedScore={currentSpeedScore}
          setCurrentSpeedScore={setCurrentSpeedScore}
        />
        {currentSpeedScore ? (
          <>
            <button onClick={saveReactionTimeScore}>save score</button>
          </>
        ) : null}
      </div>
    );
  } else if (gameMode === 'numberMemoryGame') {
    return <NumberMemoryGame currentUser={currentUser} />;
  } else if (gameMode === 'topScores') {
    return (
      <div>
        <TopScores 
          gameMode={gameMode}
          setGameMode={setGameMode} 
        />
      </div>
    )
  } else {
    return (
      <div id="MainPageContainer">
        <div id="MainPage">
          <ReactionTimeButton setGameMode={setGameMode} />
          <NumberMemoryButton setGameMode={setGameMode} />
          <button className="GameCardButton">
            <strong className="cardTitle">Verbal Memory</strong>
            <div className="fontAwesome">
              <i className="fa-solid fa-book fa-2xl"></i>
            </div>
            <p>Remember as many words as possible!</p>
          </button>

          <button className="GameCardButton">
            <strong className="cardTitle">Sequence Trainer</strong>
            <div className="fontAwesome">
              <i className="fa-solid fa-table-cells fa-2xl"></i>
            </div>
            <p>Remember the order of the buttons!</p>
          </button>

          <button className="GameCardButton">
            <strong className="cardTitle">Aim Trainer</strong>
            <div className="fontAwesome">
              <i className="fa-solid fa-crosshairs fa-2xl"></i>
            </div>
            <p>How quickly can you hit all targets?</p>
          </button>
          
          <button className="GameCardButton">
            <strong className="cardTitle">Movement Trainer</strong>
            <div className="fontAwesome">
              <i className="fa-regular fa-keyboard fa-2xl"></i>
            </div>
            <p>Improve your movement in game!</p>
          </button>

          <button className="GameCardButton">
            <strong className="cardTitle">Chimp Test</strong>
            <div className="fontAwesome">
              <i className="fa-brands fa-mailchimp fa-2xl"></i>
            </div>
            <p>Are you smarter than a chimpanzee?</p>
          </button>

          <button className="GameCardButton">
            <strong className="cardTitle">Visual Memory</strong>
            <div className="fontAwesome">
              <i className="fa-solid fa-palette fa-2xl"></i>
            </div>
            <p>Remember the number of squares!</p>
          </button>

          <button className="GameCardButton">
            <strong className="cardTitle">Typing</strong>
            <div className="fontAwesome">
              <i className="fa-regular fa-keyboard fa-2xl"></i>
            </div>
            <p>Test how many WPM you can type!</p>
          </button>

        </div>
      </div>
    );
};
};

export default MainDisplay;
