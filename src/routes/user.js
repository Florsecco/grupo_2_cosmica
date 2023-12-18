const express = require("express");
const userController = require("../controllers/userController");
const upload = require('../middlewares/userMulterMiddleware')

const router = express.Router();

// Register //

router.get("/register", userController.register);

// Login //

router.get("/login", userController.login);

// Profile //

router.get("/profile/:id", userController.profile);

// Edit //

router.get("/edit/:id", userController.edit);

module.exports = router;
