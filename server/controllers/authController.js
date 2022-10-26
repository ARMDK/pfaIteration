const db = require('./models/capableHumanModels');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
/* CREATE TABLE public.accounts (
	"_id" serial NOT NULL,
	"username" varchar NOT NULL,
	"email" varchar, 
	"password" varchar,
  	"reactionGame_id" bigint, 
  	"memoryGame_id" bigint,
  	"numberGame_id" bigint,
	CONSTRAINT "accounts_pk" PRIMARY KEY ("_id") */
const saltRounds = 10;
const authController = {};

authController.

// authController.bcrypt.hash(req.body.passwordsignup, saltRounds, function (err, hash){
//     // sql query to insert in schema INSERT INTO table_name (column1, column2, column3, ...)
//         name: req.body.username
//         email: req.body.email
//         password: hash
//     })
//     .then(function(data)){
//         if(data){
//             res.redirect('/login')
//         }
//     }
// })
module.exports = authController;