const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    username:{
        type:String,
        unique:true ,// Every username will be unique  (This is known as SchemaLevel Validation)
        required:true   
    },
    password:{
      type: String
    }
})

const userModel = mongoose.model("user",userSchema); 
module.exports = userModel;