import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import SignUpButton from './SignUpButton';
import LoginButton from './LoginButton';

const UserEnter = ({ setCurrentUser, setGameMode }) => {
  const navigate = useNavigate();
  const server = axios.create({
    baseURL: 'http://localhost:3000/',
  });

  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const handleClickHome = async (e) => {
    e.preventDefault();
    navigate('/dash');
    setGameMode('dashboard');
  };

  return (
    <div className='UserEnter'>
        <LoginButton />
        <SignUpButton />
        
        <button onClick={(e) => {handleClickHome(e)}}>
            Just take me to the games
        </button>
    </div>
  );
};

export default UserEnter;
