const express = require('express');
const db = require('../models/capableHumanModels');
const path = require('path');
const bcrypt = require('bcrypt');

const userController = {};
userController.signup = async (req, res, next) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const result = await db.query(
      "INSERT INTO test.users (user_id,first_name,last_name,username,password) VALUES ($1,$2,$3,$4,$5) RETURNING test.users.*",
      [req.body.username, hashedPassword]
      );
      console.log('result from signup controller', result)
      return next();
      } catch (e) {
      return next(e);
      }
    };

userController.loginUser = async (req, res, next) => {
  const { username, password } = req.body;
  console.log('from req.body', username, password)
  try {
    //try block await db.query and assign the eval result to a variable
    //check if the username and password are true

      const queryString = 'SELECT * FROM test.users WHERE username = $1';
      // function(error, results, fields)
      const userCheck = await db.query(queryString, [username]);
        console.log('username from req.body', username)
        console.log('userCheck =>', userCheck.rows[0].username, userCheck.rows[0].password[0]);
        if (userCheck.rows[0].username === username && userCheck.rows[0].password[0] == password){
          console.log('logged in successfully from user login controller')
          res.locals.username = username
          return next()
        }
        else{
          res.locals.username = 'failed'
          return next()

        }
  }catch(err) {
    return next({
      log: 'Express error handler caught loginUser Error inside userController',
      status: 400,
      message: { err: `An error ocurred ` }
      });
};


}
	
module.exports = userController;