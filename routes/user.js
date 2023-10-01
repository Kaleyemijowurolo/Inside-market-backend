const express = require('express');
const router = express.Router();
const userController = require("../controller/userController")
// const { authToken } = require("../middleware/authMiddleware")

router.post('/auth', userController.auth);





module.exports = router;