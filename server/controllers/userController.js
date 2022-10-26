const { application } = require('express');
const db = require('./models/capableHumanModels');
const path = require('path');

const userController = {};

app.post ('/login', async(req, res) => {
 try {
  const {username, password} = req.body;
  const hash = await bcrypt.hash(password, 10);
  await db('users').insert({username, password: hash});
  res.status(201).json({message: 'its Gucci'});
 } catch(e){
   console.log (e)
   res.status(500).json({message: 'its not Gucci'});
 }
 });
 // from users table select first row where username = username
 app.post('/login', async (req, res) => {
  try {
   const user = await db('users').first('*').where({username: req.body.username});
   if (user){
    const userGucci = await bcrypt.compare(req.body.password, user.password);
    if (valid){
     res.status(200).json({message: 'its Gucci'});
    } else {
     res.status(401).json({message: 'its not Gucci'});
    }
   }
  } catch(e){
   console.log (e)
   res.status(500).json({message: ' User AWOL ...its not Gucci'});
  } 
 }
 




module.exports = userController;