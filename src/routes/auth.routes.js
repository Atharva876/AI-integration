const {registerController,loginController} = require('../controllers/auth.controller')
const  express = require("express");
const userModel = require("../models/user.model");
const jwt = require('jsonwebtoken');
const router = express.Router();



/*
POST register 
POST login
GET/user (protected)
*/
//1>  register data api 
router.post('/register', registerController);
router.post('/login',loginController);
module.exports = router;