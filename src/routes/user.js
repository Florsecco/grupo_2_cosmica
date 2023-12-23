const express = require("express");
const userController = require("../controllers/userController");
const upload = require('../middlewares/userMulterMiddleware')
const { body } = require('express-validator');
const authMiddleware = require("../middlewares/authMiddleware");
const guestMiddleware = require("../middlewares/guestMiddleware");
const validations = [
    body('email')
        .notEmpty().withMessage('Debe ingresar el email').bail()
        .isEmail().withMessage('Debe ingresar un email valido'),
    body('password')
        .notEmpty().withMessage('Debe ingresar la contraseña.')
]

const validationsUpdate = [
    body('first_name')
        .notEmpty().withMessage('Debe ingresar su Nombre.').bail()
        .isString().withMessage('No debe ingresar numeros'),
    body('last_name')
        .notEmpty().withMessage('Debe ingresar su Apellido.').bail()
        .isString().withMessage('No debe ingresar numeros'),
    body('address')
        .notEmpty().withMessage('Debe ingresar su domicilio.').bail()
        .isString().withMessage('No debe ingresar numeros'),
    body('email')
        .notEmpty().withMessage('Debe ingresar el email').bail()
        .isEmail().withMessage('Debe ingresar un email valido'),
    // body('oldPassword')
    //     .notEmpty().withMessage('Debe ingresar la contraseña.'),
    // body('password')
    //     .notEmpty().withMessage('Debe ingresar la contraseña.')
]
const router = express.Router();

// Register //

router.get("/register", userController.register);

// Login //

router.get("/login",guestMiddleware, userController.login);
router.post("/login", validations, userController.processLogin);

// Profile //

router.get("/profile",authMiddleware, userController.profile);

// Edit //

router.get("/edit",authMiddleware, userController.edit);
router.put('/edit',upload.single('avatar'), validationsUpdate,userController.update)

// Logout //
router.get('/logout', userController.logout)

// Delete //
router.put('/',userController.delete)



module.exports = router;
