const bcrypt = require("bcrypt");
const STATUSCODE = require("../utils/status-codes");
const passwordGenerator = require("password-generator");
const AdminRepo = require("../repositories/adminRepo");

// const { generateToken } = require("../utils/generateToken");
// const AdminRepo = require("../repositories/adminRepo");

exports.registerAdmin = async (req) => {
  const adminExist = await AdminRepo.findOneByEmail(req.body.email);

  if (adminExist)
    return {
      STATUS_CODE: STATUSCODE?.BAD_REQUEST,
      STATUS: false,
      MESSAGE: "Admin already exist",
    };

    const password = passwordGenerator(12, false);

    console.log({pass:password})

      /*
   *pick the super-admin role-id from the db
   */
  const role = await AdminRole_TasksRepo.findOneAdminRole("super-admin", true);

};