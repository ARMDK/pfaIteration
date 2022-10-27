const { application } = require('express');
const db = require('../models/capableHumanModels');
const path = require('path');


const userController = {};
//if username/password match db we redirect to /dashbord
//otherwise redirect to /signup
const {username, password} = req.body;
userController.loginUser = async(req,res,next) =>  {

  try {
   const {username, password} = req.body;
   const hash = await bcrypt.hash(password, 10);
   const query = `SELECT * FROM test.users WHERE password='${hash}'`;
   const result = await db.query(query);
   //('users').insert({username, password: hash});
   res.locals.confirmedUser = result;
   next();
  } catch (err) {
    next({
      log: `error ${err} occurs in the userController.loginUser middleware`,
      status: 400,
      message: {err: 'NOt gucci for the frontend'}
      });

  try {//try block await db.query and assign the eval result to a variable
    const query1 = `SELECT username FROM test.users`
      const userCheck = await db.query(query1)
      console.log('userCheck', userCheck)
      return next()
      //  await db('users').insert({username, password: hash});
      //  res.status(201).json({username, password} );
  }catch(e) {
        console.log (e)
        res.status(500).json({message: 'I am here in the catch block of the login userController'})
  }
};



  //   console.log('req.body=>',req.body)
  //  const {username, password} = req.body;
// if username exists in column username from table users
// const user = await db.(`SELECT username FROM users WHERE EXISTS users.username = ${username} ` )|

// const query1 = `SELECT username FROM test.users`
// console.log (db.query(query1))

// 

// console.log ('req.query ==>', req.query(query1))
  //const hash = await bcrypt.hash(password, 10);
  //  res.locals.userData = {username, password}

  //  const user = await db('users').first('*').where({user_id: req.body.username});
  //  if (user){
  //   const {user_id} = user;
  //  console.log ('user exists', user_id,user)
  //  }
  


 // from users table select first row where username = username
//  app.post('/signup', async (req, res) => {
//   try {
//    const user = await db('users').first('*').where({username: req.body.username});
//    if (user){
//     const userGucci = await bcrypt.compare(req.body.password, user.password);
//     if (valid){
//      res.status(200).json({message: 'its Gucci'});
//     } else {
//      res.status(401).json({message: 'its not Gucci'});
//     }
//    }
//   } catch(e){
//    console.log (e)
//    res.status(500).json({message: ' User AWOL ...its not Gucci'});
//   } 
//  });
 

//  app.post('/signup', async (req, res) => {
//   try {
//    const user = await db('users').first('*').where({user_id: req.body.username});
//    if (user){
//     const userGucci = await bcrypt.compare(req.body.password, user.password);
//     if (valid){
//      return next ()
//     } else {
//      res.status(401).json({message: 'its not Gucci'});
//     }
//    }
//   } catch(e){
//    console.log (e)
//    res.status(500).json({message: ' User AWOL ...its not Gucci'});
//   } 
//  });
 






module.exports = userController;