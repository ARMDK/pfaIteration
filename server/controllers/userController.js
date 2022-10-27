const express  =  require('express');
const db = require('../models/capableHumanModels');
const path = require('path');
const bcrypt = require('bcrypt');

const userController = {};
userController.signup = async (req, res, next) =>{
  const {email, username, password} = req.body;
  //console.log('signup: ', email, username, password)
  const newPlayer = {email, username, password}
  const hashedPassword = await bcrypt.hash(password, 10);
  const newUserQueury = 'INSERT INTO test.users SET ?'
  const insertUser = await db.query(
    insertUser, newUser, 
  function(error, result, fields){
    if (error){
      console.log('sign up error')
    }else{
      console.log('signed up successfully')
    }
  });
}
userController.loginUser = async(req,res,next) =>  {
  const {username, password} = req.body;
  console.log('from req.body', username, password)
  
  try {
    //try block await db.query and assign the eval result to a variable
    //check if the username and password are true
    // if (username && password) 
  const queryString = (
    'SELECT * FROM test.users WHERE username = ? AND password = ?', [username, password]);
    // function(error, results, fields)
  const userCheck = await db.query(
    queryString, [username, password],async function (error, result, fields) {
    if (error){
      return next({
        log: 'Express error handler caught loginUser Error inside userController',
        status: 400,
        message: { err: `An error ocurred in login` }
        })
    }
    else {
      if(result.length > 0){
        const compare = await bcrypt.compare(password, result[0].password)
          if (compare){
              console.log('logged In Successfully')
          }else{
              console.log('username password don\'t match')
          }
      }else{
            console.log('username doesn\'t match db records')
      }
    }
  });
  console.log('username from req.body', username)
  console.log('queryString', queryString);
  // console.log('results', results)
  // console.log('fields', fields)
  // if (results.length > 0){
  //       authenticate user
  //   res.locals.username = username
  // }
  return next();
  }catch(err){
    return next({
      log: 'Error inside Usercontroller.loginUser',
      status: 500,
      message: { err: `An error ocurred in login user` }
    });
  };
}

module.exports = userController;