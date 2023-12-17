const express = require("express");
const userController = require("../controllers/userController");

const router = express.Router();

router.get("/register", userController.register);

router.get("/login", userController.login);

router.get("/profile/:id", userController.profile);

router.get("/edit/:id", userController.edit);

module.exports = router;
