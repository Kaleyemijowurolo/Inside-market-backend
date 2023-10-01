const express = require('express');
const router = express.Router();
const adminController = require("../controller/adminController")
/**
 *  superAdmin, User and Mktplace nanagement
*/
router.post('/register', adminController.registerAdmin);


module.exports = router;