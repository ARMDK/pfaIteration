import React, { useState } from 'react';
import MainDisplay from './MainDisplay';
import Navbar from './Navbar';
import LoginButton from './LoginButton';
import SignUpButton from './SignUpButton';
import StatsContainer from './StatsContainer';
import { Route, Routes } from 'react-router-dom';

const LoginContainer = () => {
    const [gameMode, setGameMode] = useState('loginPage');
    const [currentUser, setCurrentUser] = useState(null);
    const [currentSpeedScore, setCurrentSpeedScore] = useState(null);
    const [highSpeedScore, setHighSpeedScore] = useState(null);
    const [overallHighSpeedScore, setOverallHighSpeedScore] = useState(null);

    return (
      <div className='LoginContainer'>
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

    </Routes>
        </div>
    );

}

module.exports = LoginContainer;