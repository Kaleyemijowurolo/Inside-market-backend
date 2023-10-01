const userModel = require("../model/user");

exports.findOneByEmail = async (filter1) => {
    const response = await userModel
      .findOne({
        email: filter1,
      })
     
    return response;
  };
  