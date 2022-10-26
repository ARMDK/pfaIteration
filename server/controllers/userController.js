const { application } = require('express');
const db = require('./models/capableHumanModels');
const path = require('path');


const userController = {};
userController.loginUser = async(req,res,next) =>  {
  try {
   const {username, password} = req.body;
   const hash = await bcrypt.hash(password, 10);
   await db('users').insert({username, password: hash});
   res.status(201).json({message: 'its Gucci'});
  } catch(e){
    console.log (e)
    res.status(500).json({message: 'its not Gucci'});
  }
  };

 
 app.post('/signup', async (req, res) => {
  try {
   const user = await db('users').first('*').where({username: req.body.username});
   if (user){
    const userGucci = await bcrypt.compare(req.body.password, user.password);
    if (valid){
     return next ()
    } else {
     res.status(401).json({message: 'its not Gucci'});
    }
   }
  } catch(e){
   console.log (e)
   res.status(500).json({message: ' User AWOL ...its not Gucci'});
  } 
 });
 
const Authcontroller = {};
Authcontroller.verifyUser = async (req, res, next) => {}



module.exports = userController;

//`SELECT * FROM test.users WHERE password=‘${hash}’`