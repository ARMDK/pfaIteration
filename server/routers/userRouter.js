const path = require('path');
const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');

// router.post('/signup', userController.createUser, (req, res) => { 
//     res.status(200).send('hello in create user');
// });
// post should be get 
router.post('/login', userController.loginUser, (req, res) => {  
    res.status(200).json('loggin successful from login router')
});
module.exports = router;