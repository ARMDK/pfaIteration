const { application } = require('express');
const db = require('../models/capableHumanModels');
const path = require('path');


const userController = {};
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
  }
  };


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
 
<<<<<<< HEAD
=======
//  app.post('/signup', async (req, res) => {
//   try {
//    const user = await db('users').first('*').where({username: req.body.username});
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
 
const Authcontroller = {};
Authcontroller.verifyUser = async (req, res, next) => {}
>>>>>>> dev




module.exports = userController;