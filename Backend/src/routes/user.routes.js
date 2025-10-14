const express = require("express");
const userController = require("../controllers/user.controller");
const validation = require("../middlewares/validator");

const router = express.Router();

// /api/admin/register
router.post("/register", validation.registerUser, userController.registerUser);

// /api/admin/login
router.post("/login", validation.loginUser, userController.loginUser);

module.exports = router;
