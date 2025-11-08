const userModel = require("../models/user.model");
const bcrypt = require("bcryptjs");

const jwt = require("jsonwebtoken");
async function registerController(req, res) {
  const { username, password } = req.body;
  const existingUser = await userModel.findOne({ username });
  if (existingUser) {
    return res.status(409).json({
      message: "user already exists",
    });
  } // user create karne ke baad token create karna padta hai
  const newUser = await userModel.create({ username, password: await bcrypt.hash(password,10) }); // 10 means 10 times hashing 

  const token = jwt.sign(
    {
      id: newUser._id,
    },
    process.env.JWT_SECRET
  );
  res.cookie("token", token);

  return res.status(201).json({
    message: "user registered Successfully",
  });
}
async function loginController(req, res) {
  const { username, password } = req.body;


  const userPresent = await userModel.findOne({ username });
  if (!userPresent) {
    return res.status(400).json({
      message: "User not found",
    });
  }
  const isPasswordValid = await bcrypt.compare(password,userPresent.password); // bcrypt phele password ko hash mai convert karega uske baad password ko compare karega jo hamare database ma hai 

  if (!isPasswordValid) {
    return res.status(400).json({
      message: "Invalid Password",
    });
  }

  const token = jwt.sign({ id: userPresent._id }, process.env.JWT_SECRET);
  res.cookie("token", token);

  res.status(200).json({
    message: " you loggedin  Successfully",
  });
}

module.exports = {
  registerController,
  loginController,
};
