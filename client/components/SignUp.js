import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const SignUp = ({ setGameMode }) => {
  const navigate = useNavigate();
  const server = axios.create({
    baseURL: 'http://localhost:3000/',
  });

  const [fName, setfName] = useState('');
  const [lName, setlName] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameInput = (e) => {
    e.preventDefault();
    setUserName(e.target.value);
  };
  const handlefNameInput = (e) => {
    e.preventDefault();
    setfName(e.target.value);
  };
  const handlelNameInput = (e) => {
    e.preventDefault();
    setlName(e.target.value);
  };
  const handlePasswordInput = (e) => {
    e.preventDefault();
    setPassword(e.target.value);
  };

  function submitForm(e) {
    //perform post request to the server
    // console.log(userName, email, password);
    if (userName.length === 0 || password.length === 0 || fName.length === 0 || lname.length === 0)  {
      return alert('Please provide information to all fields!')
    }
    server
      .post('/user/signup', {
        user_id: 10,
        first_name: fName,
        last_name: lName,
        username: userName,
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
          onChange={handlefNameInput}
          id='fNameInput'
          name='fName'
          type='text'
          required='required'
        ></input>

        <label htmlFor='lName'>Last name: </label>
        <input
          onChange={handlelNameInput}
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
