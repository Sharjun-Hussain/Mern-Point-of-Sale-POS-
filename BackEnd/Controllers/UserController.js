const usersModel = require("../Models/UserModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

exports.RegisterUser = async (req, res, next) => {
  const userDataFromReguest = req.body;
  const { username, email,role, password } = req.body;

  if (!username || !email || !role || !password) {
    return res
      .status(400)
      .json({ Message: "Please Completly Fill THe Input Fields" });
  }

  const ExistingUser = await usersModel.findOne({
    $or: [{ username }, { email }],
  });

  if (!ExistingUser) {
    const user = await usersModel.create(userDataFromReguest);
    const generatedToken = user.generatejwtToken();

    if (user) {
      res.status(200).cookie('token',generatedToken,{httponly:true}).json({
        Message: " Your Account Creation SuccessFull! ",
        generatedToken,
      });
    }
  }

  if (ExistingUser) {
    return res.status(400).json({
      Message: " User Already Found Please Sign In",
    });
  }
};

exports.LoginUser = async (req, res, next) => {
  const { username, email, password } = req.body;

  if (!email || !password) {
    return res
      .status(400)
      .json({ Message: "Please Completly Fill THe Input Fields" });
  }

  try {
    const user = await usersModel.findOne({email});
    if (!user) {
      return res.status(400).json({
        Message: "User OR Password Incorrect",
      });
    }

    if (user) {
      try {
        if (!(await user.isValidPassword(password))) {
          return res.status(400).json({
            Message: "Invalid UserName OR Password",
          });
        }

        const generatedToken = user.generatejwtToken();
        res.status(200).cookie('token',generatedToken,{httponly:true}).json({
          Message: "Login SuccessFull",
          generatedToken,
          user,
        });
      } catch (err) {}
    }
  } catch (err) {
    return res.status(500).json({
      Message: "Internal server Error",
    });
  }
};


exports.signout = (req,res,next) =>{
  res.clearCookie('token').json({Message:"Logout SuccessFully!"}).status(200);
}