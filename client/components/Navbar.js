import React, { useState } from 'react';
// import SignUp from './SignUp';
// import Login from './Login';
import MainDisplay from './MainDisplay';
import SignUpButton from './SignUpButton';
import LoginButton from './LoginButton';
import HomeButton from './HomeButton';
import TopScoresButton from './TopScoresButton';


const Navbar = ({ setGameMode, currentUser }) => {
  return (
    <div className="Navbar">
      <HomeButton setGameMode={setGameMode} />
        <h4>{currentUser ? 'Welcome back, ' + currentUser.username : null}</h4>
        <h3>About</h3>
        <h3>Username</h3>
        <button>Signout</button>
      <div>
        {/* <LoginButton setGameMode={setGameMode} />
        <SignUpButton setGameMode={setGameMode} /> */}
        <TopScoresButton setGameMode={setGameMode}/>
      </div>
    </div>
  );
};

export default Navbar;
