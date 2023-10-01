const UserService = require("../services/userServices");

exports.auth = async (req, res) => {
  const data = await UserService.auth(req.body);

  return res.status(data.STATUS_CODE).json({
    status: data.STATUS,
    message: data.MESSAGE,
    data: data.DATA,
  });
};


