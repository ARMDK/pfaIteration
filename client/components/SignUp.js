import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const SignUp = ({ setGameMode }) => {
  const navigate = useNavigate();
  const server = axios.create({
    baseURL: 'http://localhost:3000/',
  });

  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameInput = (e) => {
    e.preventDefault();
    setUserName(e.target.value);
  };
  const handleEmailInput = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
  };
  const handlePasswordInput = (e) => {
    e.preventDefault();
    setPassword(e.target.value);
  };

  function submitForm(e) {
    //perform post request to the server
    // console.log(userName, email, password);
    if (userName.length === 0 || password.length === 0 || email.length === 0) {
      return;
    }
    server
      .post('/user/signup', {
        username: userName,
        email: email,
        password: password,
      })
      .then((res) => console.log(res))
      .catch((err) => {
        console.error(err);
      });
    setGameMode('login');
    navigate('/user/login');
  }

  const handleClick = (e) => {
    e.preventDefault();
    navigate('/user/signUp');
    setGameMode('signUp');
  };

  return (
    <div className='SignUp'>
      <form>
        <h3>Sign up here!</h3>
        <label htmlFor='fName'>First name: </label>
        <input
          onChange={handleEmailInput}
          id='fNameInput'
          name='fName'
          type='text'
          required='required'
        ></input>

        <label htmlFor='lName'>Last name: </label>
        <input
          onChange={handleEmailInput}
          id='lNameInput'
          name='lName'
          type='text'
          required='required'
        ></input>

        <label htmlFor='username'>Username: </label>
        <input
          onChange={handleUsernameInput}
          id='username'
          name='username'
          type='text'
          required='required'
        ></input>

        <label htmlFor='password'>Password: </label>
        <input
          onChange={handlePasswordInput}
          id='password'
          name='password'
          type='password'
          required='required'
        ></input>

        <input onClick={submitForm} type='button' value='submit' />
      </form>
    </div>
  );
};

let formData = document.querySelector('#form');
// console.log(formData)

export default SignUp;
