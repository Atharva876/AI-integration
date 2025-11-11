const express = require('express');
const authroutes = require('./routes/auth.routes')
const cookie = require("cookie-parser");
const postsRoutes = require("./routes/posts.routes");
const cookieParser = require("cookie-parser");

const app = express();
app.use(cookieParser());
app.use(express.json());

app.use('/api/auth',authroutes)
app.use('/api/posts',postsRoutes);


module.exports=app;