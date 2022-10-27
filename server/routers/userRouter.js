// CODE BELOW FOR TESTS ONLY - REMOVE WHEN DONE
const express  =  require('express');
const db = require('../models/capableHumanModels');
const path = require('path');
const bcrypt = require('bcrypt');
const userController = require('../controllers/userController');
const router = express.Router();


// const path = require('path');
// const express = require('express');
// const router = express.Router();

// router.post('/signup', userController.createUser, (req, res) => { 
//     res.status(200).send('hello in create user');
// });
 
// post should be get 
router.post('/login', userController.loginUser, (req, res) => {  
    res.status(200).json(res.locals.username)
});
// router.post('/signup', userController.signup, (req, res) => {  
//     res.status(200).json('signup successful from signup router')
// });
module.exports = router;

// router.post('/login', userController.loginUser, (req, res) => {  
//     res.status(200).json('loggin successful from login router')
// });
// module.exports = router;
 
