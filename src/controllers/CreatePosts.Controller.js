const PostModle = require("../models/post.model");
const GenerateCaption = require("../service/ai.service");

async function CreatePostsController(req,res){
    const file = req.file;
    console.log("file recieved",file);
    const base64ImageFile = new Buffer.from(file.buffer).toString('base64');
    const caption = await  GenerateCaption(base64ImageFile);
    res.json({
        caption
    })

}

module.exports = {CreatePostsController};