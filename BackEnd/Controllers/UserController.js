const usersModel = require("../Models/UserModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

exports.RegisterUser = async (req, res, next) => {
  const userDataFromReguest = req.body;
  const { username, email } = req.body;

  const ExistingUser = await usersModel.findOne({
   $or: [{username},{email}]
  });

  if (!ExistingUser) {
    const user = await usersModel.create(userDataFromReguest);
    if (user) {
      res.status(200).json({
        "Success ": true,
        user,
        username,
        email,
      });
    }
  }

  if (ExistingUser) {
    return res.status(400).json({
      success: "false",
      Message: " User Is Already Found Please Sign In",
    });
  }
};

exports.LoginUser = async (req, res, next) => {
  const username = req.body;
  const password = req.body.password;

  res.status(200).json({
    success: "true",
    username,
    password,
  });
};
