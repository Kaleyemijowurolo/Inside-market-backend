const userTypeModel = require("../model/userType");
const prodCategoryModel = require("../model/productCategories");
const adminRoleModel = require("../model/adminRole");

/**ADD  */
exports.addUserType = async (req, res) => {
  const userType = await userTypeModel.create(req.body);
  return res.json({ message: "user-type added ", userType });
};

exports.addProductCategory = async (req, res) => {
  const prodCategory = await prodCategoryModel.create(req.body);
  return res.json({ message: "prod-Category added ", prodCategory });
};

exports.addAdminRole = async (req, res) => {
  const adminRole = await adminRoleModel.create(req.body);
  return res.json({ message: "dminRole added ", adminRole });
};

/**GET  */
exports.getUserType = async (req, res) => {
  const UserType = await userTypeModel.find();

  return res.json({ data: UserType });
};

exports.getProductCategory = async (req, res) => {
  const ProductCategory = await prodCategoryModel.find();

  return res.json({ data: ProductCategory });
};

exports.getAdminRole = async (req, res) => {
  const adminRole = await adminRoleModel.find();
  return res.json({ data:adminRole });
};