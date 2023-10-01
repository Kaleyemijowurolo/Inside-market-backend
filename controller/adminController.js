const AdminService = require("../services/adminServices")

exports.registerAdmin = async(req, res) => {
    const data =  await AdminService.registerAdmin(req)

    return  res.status(data.STATUS_CODE).json({
           status: data.STATUS,
           message: data.MESSAGE,
           data:data.DATA,
         });

}
