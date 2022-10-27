const { application } = require('express');
const db = require('../models/capableHumanModels');
const path = require('path');


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


userController.loginUser = async(req,res,next) =>  {
  const {username, password} = req.body;
  console.log('from req.body', username, password)
  try {//try block await db.query and assign the eval result to a variable
    //check if the username and password are true
    // if (username && password){

      const queryString = 'SELECT * FROM test.users WHERE username = $1';
      // function(error, results, fields)
      const userCheck = await db.query(queryString, [username]);
        console.log('username from req.body', username)
        console.log('userCheck', userCheck.rows[0]);

        
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
  }catch(e) {
    return next({
      log: 'Express error handler caught loginUser Error inside userController',
      status: 500,
      message: { err: `An error ocurred - ${e.message}` }
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