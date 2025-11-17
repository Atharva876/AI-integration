const express = require("express");
const router = express.Router();
const authMiddleware = require("../middlewares/auth.middleware");
const multer = require('multer');
const {CreatePostsController} = require("../controllers/CreatePosts.Controller");
const upload = multer({storage: multer.memoryStorage()})
// creating an api that is protected : - by checkng is user has token or not if user has then we have to verify it 
router.post("/",authMiddleware,upload.single("image"),CreatePostsController); 

module.exports = router;
