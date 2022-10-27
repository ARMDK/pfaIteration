const path = require('path');
const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');

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