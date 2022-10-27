const { application } = require('express');
const db = require('../models/capableHumanModels');
const path = require('path');
const bcrypt = require('bcrypt');


const userController = {};
//if username/password match db we redirect to /dashbord
//otherwise redirect to /signup

// console.log ('req.query ==>', req.query(query1))
  //const hash = await bcrypt.hash(password, 10);
  //  res.locals.userData = {username, password}

  //  const user = await db('users').first('*').where({user_id: req.body.username});
  //  if (user){
  //   const {user_id} = user;
  //  console.log ('user exists', user_id,user)
  //  }
userController.signup = async (req, res, next) =>{
  const {email, username, password} = req.body;
  console.log('signup: ', email, username, password)
  const newPlayer = {email, username, password}
  const hashedPassword = await bcrypt.hash(password, 10);
  const newUserQueury = 'INSERT INTO test.users SET ?'
  const insertUser = await db.query(insertUser, newUser, function(error, result, fields){
    if (error){
      console.log('sign up error')
    }
    else{
      console.log('signed up successfully')
    }
  })
}

userController.loginUser = async(req,res,next) =>  {
  const {username, password} = req.body;
  
  console.log('from req.body', username, password)
  try {//try block await db.query and assign the eval result to a variable
    //check if the username and password are true
    // if (username && password){

      const queryString = ('SELECT * FROM test.users WHERE username = ? AND password = ?', [username, password]);
      // function(error, results, fields)
      const userCheck = await db.query(queryString, [username, password],async function (error, result, fields) {
        if (error){
         return next({
            log: 'Express error handler caught loginUser Error inside userController',
            status: 400,
            message: { err: `An error ocurred in login` }
          })
        }
        else{
          if(result.length > 0){
            const compare = await bcrypt.compare(password, result[0].password)
            if (compare){
              console.log('logged In Successfully')
            }
            else{
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
        //   //authenticate user
        //   res.locals.username = username
        // }
        return next();
    // }else {
    //   console.log('//send a respose error with please enter username and password')
    // }
      //  await db('users').insert({username, password: hash});
      //  res.status(201).json({username, password} );
  }catch(err) {
    return next({
      log: 'Express error handler caught loginUser Error inside userController',
      status: 500,
      message: { err: `An error ocurred in login user` }
      });
};

}

  //   console.log('req.body=>',req.body)
  //  const {username, password} = req.body;
// if username exists in column username from table users
// const user = await db.(`SELECT username FROM users WHERE EXISTS users.username = ${username} ` )|

// const query1 = `SELECT username FROM test.users`
// console.log (db.query(query1))



//  app.post('/signup', async (req, res) => {
//   try {
//    const user = await db('users').first('*').where({user_id: req.body.username});
//    if (user){
//     const userGucci = await bcrypt.compare(req.body.password, user.password);
//     if (valid){
	
module.exports = userController;