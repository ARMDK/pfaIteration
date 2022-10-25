const path = require('path;');
const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');

router.post('/signup', userController.createUser, (req, res) => {   // endpoint = /user/signup
    res.status(200);
});

module.exports = router;