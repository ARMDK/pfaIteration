import React, { useState } from 'react';
import Navbar from './Navbar';
import StatsContainer from './StatsContainer';
import TopScoresButton from './TopScoresButton';
import TopScores from './TopScores';
import { Route, Routes } from 'react-router-dom';

const TopScoreContainer = () => {
    const [gameMode, setGameMode] = useState('topScores');
    const [currentUser, setCurrentUser] = useState(null);
    const [currentSpeedScore, setCurrentSpeedScore] = useState(null);
    const [highSpeedScore, setHighSpeedScore] = useState(null);
    const [overallHighSpeedScore, setOverallHighSpeedScore] = useState(null);

    return (
      <div className='TopScoresContainer'>
        <Routes>
          <Route path='/'
              element={
                <>
                  <Navbar setGameMode={setGameMode} currentUser={currentUser} />
                  <StatsContainer />
                </>
              }
          >
          </Route>

          <Route path='/user/login'
            element={
                <>
                <Navbar setGameMode={setGameMode} currentUser={currentUser} />
                  <StatsContainer />
                </>
            }
          >
          </Route>

          <Route path='/user/signup'
            element={
                <>
                <Navbar setGameMode={setGameMode} currentUser={currentUser} />
                  <StatsContainer />
                </>
            }
          >
          </Route>
          <Route path='/game/scores'
              element={
                <>
                  <Navbar setGameMode={setGameMode} currentUser={currentUser} />
                  <StatsContainer />
                </>
              }
          >
          </Route>
    </Routes>
        </div>
    );

}

module.exports = TopScoreContainer;