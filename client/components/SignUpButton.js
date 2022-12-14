import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignUpButton = ({ setGameMode }) => {
    const navigate = useNavigate();
    const handleClickSignup = (e) => {
      e.preventDefault();
      navigate('/user/signUp');
      setGameMode('signUp');
    };
    return (
      
      <button onClick={handleClickSignup} className="signupLogin">
        <h3>Signup</h3>
      </button>
    );
}




export default SignUpButton;