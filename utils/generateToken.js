const jwt = require("jsonwebtoken");
const dotenv = require("dotenv").config();

exports.generateToken = async(user) => {
   const token =  jwt.sign(
        {
          _id: user._id,
          email: user.email,
          phone: user.phone,
        },
        process.env.JWT_SECRET,
        {
          expiresIn: "1d",
        }
      );
      return token
}