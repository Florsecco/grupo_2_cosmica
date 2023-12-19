const express = require("express");
const userController = require("../controllers/userController");
const upload = require('../middlewares/userMulterMiddleware')
const { body } = require('express-validator');
const validations = [
    body('email')
        .notEmpty().withMessage('Debe ingresar el email').bail()
        .isEmail().withMessage('Debe ingresar un email valido'),
    body('password')
        .notEmpty().withMessage('Debe ingresar la contraseña.')
]
const router = express.Router();

// Register //

router.get("/register", userController.register);

// Login //

router.get("/login", userController.login);
router.post("/login", validations, userController.processLogin);

// Profile //

router.get("/profile", userController.profile);

// Edit //

router.get("/edit/:id", userController.edit);

module.exports = router;
