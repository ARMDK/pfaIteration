// Not connected yet
import React, { useState } from 'react';
import DashDisplay from './DashDisplay';
import Navbar from './Navbar';
import StatsContainer from './StatsContainer';
import TopScoresButton from './TopScoresButton';
import TopScores from './TopScores';
import { Route, Routes } from 'react-router-dom';
import NumberMemoryGame from './NumberMemoryGame';
import ReactionTimeGame from './ReactionTimeGame';

const DashContainer = () => {
    const [gameMode, setGameMode] = useState('dashboard');
    const [currentUser, setCurrentUser] = useState(null);
    const [currentSpeedScore, setCurrentSpeedScore] = useState(null);
    const [highSpeedScore, setHighSpeedScore] = useState(null);
    const [overallHighSpeedScore, setOverallHighSpeedScore] = useState(null);

    return (
      <div className='DashContainer'>
        <Routes>
          
          <Route path='/dash'
          element={
            <>
              <Navbar setGameMode={setGameMode} currentUser={currentUser} />
              <DashDisplay gameMode={gameMode} setGameMode={setGameMode} />
              <StatsContainer />
            </>
          }
          ></Route>
          <Route path='/game/scores'
              element={
                <>
                  <Navbar setGameMode={setGameMode} currentUser={currentUser} />
                  <StatsContainer />
                </>
              }
          >
          </Route>
          <Route path='/game/reactionTime'
          element={
            <>
              <Navbar currentUser={currentUser} setGameMode={setGameMode} />
              <ReactionTimeGame
                gameMode={gameMode}
                currentUser={currentUser}
                currentSpeedScore={currentSpeedScore}
                setCurrentSpeedScore={setCurrentSpeedScore}
                setHighSpeedScore={setHighSpeedScore}
                overallHighSpeedScore={overallHighSpeedScore}
                setOverallHighSpeedScore={setOverallHighSpeedScore}
              />
              <StatsContainer
                currentUser={currentUser}
                highSpeedScore={highSpeedScore}
                currentSpeedScore={currentSpeedScore}
                overallHighSpeedScore={overallHighSpeedScore}
                gameMode={gameMode}
              />
            </>
          }
        ></Route>
        <Route path='/game/numberMemory'
          element={
            <>
              <Navbar setGameMode={setGameMode} currentUser={currentUser} />
              <NumberMemoryGame setGameMode={setGameMode} currentUser={currentUser} />
              {/* <MainDisplay gameMode={gameMode} currentUser={currentUser} /> */}
              <StatsContainer gameMode={gameMode} currentUser={currentUser} />  
            </>
          }
        ></Route>
    </Routes>
        </div>
    );

}

module.exports = DashContainer;