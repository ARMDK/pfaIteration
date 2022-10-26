const db = require('./models/capableHumanModels');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

module.exports = authController;