const bcrypt = require("bcrypt");
const STATUSCODE = require("../utils/status-codes");
const passwordGenerator = require("password-generator");
// const { generateToken } = require("../utils/generateToken");
// const AdminRepo = require("../repositories/adminRepo");

exports.registerAdmin = async (req) => {
  
  return {
    STATUS_CODE: STATUSCODE?.CREATED,
    STATUS: true,
    MESSAGE: "SuperAdmin created successfully",
    DATA: "createAdmin",
  };
};