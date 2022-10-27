import React, { useState } from 'react';
import MainDisplay from './MainDisplay';
import DashDisplay from './DashDisplay';
import Navbar from './Navbar';
import ReactionTimeGame from './ReactionTimeGame';
import NumberMemoryGame from './NumberMemoryGame';
import StatsContainer from './StatsContainer';
import { Route, Routes } from 'react-router-dom';
import Login from './Login';
import SignUp from './SignUp';

const MainContainer = () => {
  const [gameMode, setGameMode] = useState('mainPage');
  const [currentUser, setCurrentUser] = useState(null);
  const [currentSpeedScore, setCurrentSpeedScore] = useState(null);
  const [highSpeedScore, setHighSpeedScore] = useState(null);
  const [overallHighSpeedScore, setOverallHighSpeedScore] = useState(null);


  return (
    <div className='MainContainer'>
      <Routes>
        <Route path='/'
          element={
            <>
              <Navbar setGameMode={setGameMode} currentUser={currentUser} />
              <MainDisplay gameMode={gameMode} setGameMode={setGameMode} />
              <StatsContainer />
            </>
          }
        ></Route>
        <Route path='/dash'
          element={
            <>
              <Navbar setGameMode={setGameMode} currentUser={currentUser} />
              <DashDisplay gameMode={gameMode} setGameMode={setGameMode} />
              <StatsContainer />
            </>
          }
        ></Route>
        
        <Route path='/user/signUp'
          element={
            <>
              <Navbar setGameMode={setGameMode} />
              <SignUp setGameMode={setGameMode} gameMode={gameMode} />
            </>
          }
        ></Route>
        <Route path='/user/login'
          element={
            <>
              <Navbar setGameMode={setGameMode} />
              <Login
                gameMode={gameMode}
                setCurrentUser={setCurrentUser}
                setGameMode={setGameMode}
              />
            </>
          }
        ></Route>
                <Route path='/game/scores'
          element={
            <>
              <Navbar setGameMode={setGameMode} />
              <MainDisplay
                gameMode={gameMode}
                setCurrentUser={setCurrentUser}
                setGameMode={setGameMode}
              />
            </>
          }
        ></Route>

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
};

export default MainContainer;
