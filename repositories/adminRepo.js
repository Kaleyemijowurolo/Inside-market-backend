const adminModel = require("../model/admin");





exports.findOneByEmail = async (filter1) => {
    const response = await adminModel.findOne({ email: filter1}).populate("admin_role");
    return response;
  };