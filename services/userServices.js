const bcrypt = require("bcrypt");
const UserRepo = require("../repositories/userRepo");
const STATUSCODE = require("../utils/status-codes");
const passwordGenerator = require("password-generator");

exports.auth = async (data) => {
  const userExist = await UserRepo.findOneByEmail(data.email);
  console.log(userExist);

  return {
    STATUS_CODE: STATUSCODE.CREATED,
    STATUS: true,
    MESSAGE: "account created successfully",
  };
};
