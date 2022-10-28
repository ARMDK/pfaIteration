import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignOutButton = ({ setGameMode }) => {
    const navigate = useNavigate();
    const handleClickSignOut = (e) => {
      e.preventDefault();
      navigate('/');
      setGameMode('signedOut');
    };
    return (
      
        <button onClick={handleClickSignOut} className="navRight">
            <h3>Sign out</h3>
        </button>
      
    );
}

export default SignOutButton;