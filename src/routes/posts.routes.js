const express = require("express");
const router = express.Router();
const authMiddelware = require("../middlewares/auth.middleware");
const multer = require('multer');
const CreatePostsController = require("../controllers/CreatePosts.Controller");
// creating an api that is protected : - by checkng is user has token or not if user has then we have to verify it 
router.post("/",authMiddelware,CreatePostsController); 

module.exports = router;
