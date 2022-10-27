// CODE BELOW FOR TESTS ONLY - REMOVE WHEN DONE
const express  =  require('express');
const db = require('../models/capableHumanModels');
const path = require('path');
const bcrypt = require('bcrypt');
const userController = require('../controllers/userController');

router.get(
    "/get", async (req, res, next) => {
    try {
      const result = await db.query("SELECT * FROM test.users RETURNING *" );
      return res.json(result.rows);
    } catch (e) {
      return next(e);
    }
  });

router.post(
    "/post", async (req, res, next) => {
    try {
      const hashedPassword = await bcrypt.hash(req.body.password, 10);
      const result = await db.query(
        "INSERT INTO test.users (username, password) VALUES ($1,$2) RETURNING *",
        [req.body.username, hashedPassword]
    );
    return res.json(result.rows[0]);
    } catch (e) {
    return next(e);
    }
});
router.post("/login", async (req, res, next) => {
    try {
      // try to find the user first
      const foundUser = await db.query(
        "SELECT * FROM test.users WHERE username=$1 LIMIT 1",
        [req.body.username]
      );
      if (foundUser.rows.length === 0) {
        return res.json({ message: "Invalid Username" });
      }
      // if the user exists, let's compare their hashed password to a new hash from req.body.password
      const hashedPassword = await bcrypt.compare(
        req.body.password,
        foundUser.rows[0].password
      );
      // bcrypt.compare returns a boolean to us, if it is false the passwords did not match!
      if (hashedPassword === false) {
        return res.json({ message: "Invalid Password" });
      }
      return res.json({ message: "Logged In!" });
    } catch (e) {
      return res.json(e);
    }
  });
  
  module.exports = router;



//END OF TEST CODE - REMOVE WHEN DONE
//
// const path = require('path');
// const express = require('express');
// const router = express.Router();

// router.post('/signup', userController.createUser, (req, res) => { 
//     res.status(200).send('hello in create user');
// });

// router.post('/login', userController.loginUser, (req, res) => {  
//     res.status(200).json('loggin successful from login router')
// });
// module.exports = router;