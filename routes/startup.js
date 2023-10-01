const express = require("express");
const router = express.Router();
const startupController = require("../controller/startupController");

/**ADD */
router.post("/product-category", startupController.addProductCategory)
router.post("/user-type", startupController.addUserType)
router.post("/admin-role", startupController.addAdminRole)

/**GET */
router.get("/product-category", startupController.getProductCategory)
router.get("/user-type", startupController.getUserType)
router.get("/admin-role", startupController.getAdminRole)

// http://127.0.0.1:3001

module.exports = router;
