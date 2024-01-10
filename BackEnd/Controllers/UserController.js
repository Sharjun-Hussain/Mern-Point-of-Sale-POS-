const usersModel = require("../Models/UserModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

exports.RegisterUser = async (req, res, next) => {
  const userDataFromReguest = req.body;
  const user = await usersModel.create(userDataFromReguest);
  if(user) {
    res.status(200).json({
        "Success ": true,
        user
    })
  }
};
