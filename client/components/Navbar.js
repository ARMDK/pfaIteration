import React, { useState } from 'react';
import MainDisplay from './MainDisplay';
import SignOutButton from './SignOutButton';
import HomeButton from './HomeButton';
import TopScoresButton from './TopScoresButton';


const Navbar = ({ setGameMode, currentUser }) => {
  return (
    <div className="Navbar">
      <HomeButton setGameMode={setGameMode} />
        <h4>{currentUser ? 'Welcome back, ' + currentUser.username : null}</h4>
        <h3>About</h3>
        <h3>Contact</h3>
        <h3>Username</h3>
        
      <div>
        <TopScoresButton setGameMode={setGameMode}/>
        <SignOutButton setGameMode={setGameMode} />
      </div>
    </div>
  );
};

export default Navbar;
