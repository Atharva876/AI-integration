 const mongoose = require('mongoose');
 const postSchema = new mongoose.Schema({
    image:String,
    caption:String,
    user:{
      type:mongoose.Schema.Types.ObjectId,
      ref:"users"   // this id that we fetched belongs to which collection ref states that.
    }
 })

 const PostModle = mongoose.model("post",postSchema);