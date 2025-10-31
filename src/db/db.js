const { error } = require('console');
const mongoose = require('mongoose');

function ConnectDB(){
    mongoose.connect(process.env.MONGODB_URL).then(()=>{
         console.log("connected to db");
    }).catch(err=>{
        console.log(err)
    })
}

module.exports=ConnectDB;