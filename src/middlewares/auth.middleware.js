const jwt = require("jsonwebtoken");
const userModel = require("../models/user.model");

async function  authMiddelware(req,res,next){
      const token = req.cookies.token;
        if(!token)
        {
            res.status(401).json({
                message:"Unauthorised Access!!"
            })
        }
    
        try{
            const decoded = jwt.verify(token,process.env.JWT_SECRET);
            const user = await userModel.findOne({
                _id:decoded.id
            })
            req.user = user;
            next();
        
        
        } catch(err){
            res.status(401).json({
                message:"Token invalid !!"
            })
        }
}

module.exports = authMiddelware;