const path = require('path');
const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');

// router.post('/signup', userController.createUser, (req, res) => { 
//     res.status(200).send('hello in create user');
// });

router.post('/login', userController.loginUser, (req, res) => {  
    res.status(200).send('hello from login user')
});
module.exports = router;