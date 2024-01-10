const jwt = require("jsonwebtoken");
const userModel = require("../Models/UserModel");

exports.isAuthenticatedUser = async (req, res, next) => {
  const { token } = req.cookies;

  if (!token) {
    return res.status(401).json({ Message: "Please Login To Access..." });
  }

  const decodedToken = jwt.verify(token, process.env.JWT_SECRET);

  req.user = await userModel.findById(decodedToken.id);
  next();
};

exports.Authorization = (...roles) => {
 return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
       res.status(401).json({ Message: "You Are Not Authorized!" });
    }
    next();
  };
};
