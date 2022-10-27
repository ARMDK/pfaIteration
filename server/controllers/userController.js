const express  =  require('express');
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
// userController.signup = async (req, res, next) =>{
//   try {
//   const {email, username, password} = req.body;
//   const newPlayer = {email, username, password}

//   const hashedPassword = await bcrypt.hash(password, 10);

//   //const newUserQueury = 'INSERT INTO test.users SET ? RETURNING *';
// const results = await 
// //   const results = await db.query (
// //     "INSERT INTO test.users (username,password) VALUES ($1,$2) RETURNING *",
// //     [req.body.username , hashedPassword]
// //   );
// //   const display = res.json(results.rows[0]);
// // console.log (display)
// /**, function(error, result, fields){
//     // console.log(db.query('test.users .*')
//     if (error){
//   console.log('signup: ', email, username, password)
//       console.log('sign up error')
//       return next({
//         log: 'Express error handler caught loginUser Error inside userController.signup',
//         status: 500,
//         message: { err: `An error ocurred in login user` }
//         });
//     }
//     else{
//       console.log('signed up successfully')
//       return next()
//     }
//   } */
//   // const insertUser = await db.query(insertUser, newUser)
// } catch(err) {
//   return next({
//     log: 'Express error handler caught loginUser Error inside userController.signup',
//     status: 500,
//     message: { err: `An error ocurred in sign user` }
//     });
// };
// }

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
    // if (username && password){

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
          return next({
            log: 'Unsuccessful Login caught in loginUser Error inside userController',
            status: 500,
            message: { err: `Unsuccessful Login, Please check Username and Password ` }
            });
        }

        // console.log('results', results)
        // console.log('fields', fields)
        // if (results.length > 0){
        //   //authenticate user
        //   res.locals.username = username
        // }
        
    // }else {
    //   console.log('//send a respose error with please enter username and password')
    // }
      //  await db('users').insert({username, password: hash});
      //  res.status(201).json({username, password} );
  }catch(err) {
    return next({
      log: 'Express error handler caught loginUser Error inside userController',
      status: 400,
      message: { err: `An error ocurred ` }
      });
};



// userController.loginUser = async(req,res,next) =>  {
//   const {username, password} = req.body;
  
//   console.log('from req.body', username, password)
//   try {//try block await db.query and assign the eval result to a variable
//     //check if the username and password are true
//     // if (username && password){

//       const queryString = ('SELECT * FROM test.users WHERE username = ? AND password = ?', [username, password]);
//       // function(error, results, fields)
//       const userCheck = await db.query(queryString, [username, password],async function (error, result, fields) {
//         if (error){
//          return next({
//             log: 'Express error handler caught loginUser Error inside userController callback',
//             status: 400,
//             message: { err: `An error ocurred in login` }
//           })
//         }
//         else{
//           if(result.length > 0){
//             const compare = await bcrypt.compare(password, result[0].password)
//             if (compare){
//               console.log('logged In Successfully')
//             }
//             else{
//               console.log('username password don\'t match')
//             }
//           }else{
//             console.log('username doesn\'t match db records')
//           }
//         }


//       });
//         console.log('username from req.body', username)
//         console.log('queryString', queryString);


//         // console.log('results', results)
//         // console.log('fields', fields)
//         // if (results.length > 0){
//         //   //authenticate user
//         //   res.locals.username = username
//         // }
//         return next();
//     // }else {
//     //   console.log('//send a respose error with please enter username and password')
//     // }
//       //  await db('users').insert({username, password: hash});
//       //  res.status(201).json({username, password} );
//   }catch(err) {
//     return next({
//       log: 'Express error handler caught loginUser Error inside userController',
//       status: 500,
//       message: { err: `An error ocurred in login user` }
//       });
// };


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