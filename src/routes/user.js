const express = require("express");
const userController = require("../controllers/userController");
const upload = require('../middlewares/userMulterMiddleware')
const { body } = require('express-validator');
const authMiddleware = require("../middlewares/authMiddleware");
const guestMiddleware = require("../middlewares/guestMiddleware");
const { findUser } = require("../models/user.model");

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
    body('confirm_password')
        .custom((value, {req}) => {
            if(value != req.body.password){
                throw new Error('Las contraseñas no coinciden');
            };

            return true;
        })
]

const validationsRegister = [
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
        .isEmail().withMessage('Debe ingresar un email valido')
        .custom((value) => {
            const userExist = findUser('email', value);
            console.log(userExist);
            if(userExist){
                throw new Error('El email ingresado ya está registrado')
            };

            return true;
        }),
    body('password')
        .notEmpty().withMessage('Debe ingresar la contraseña.'),
    body('confirm_password')
        .notEmpty().withMessage('Debe ingresar la contraseña.')
        .custom((value, {req}) => {
            if(value != req.body.password){
                throw new Error('Las contraseñas no coinciden');
            };

            return true;
        })
];

const router = express.Router();

// Register //

router.get("/register", userController.register);
router.post("/register", upload.single("avatar"), validationsRegister, userController.processRegister);

// Login //

router.get("/login",guestMiddleware, userController.login);
router.post("/login", validations, userController.processLogin);

// Profile //

router.get("/profile",authMiddleware, userController.profile);

// Edit //

router.get("/edit",authMiddleware, userController.edit);
router.put('/edit',upload.single('avatar'), validationsUpdate, userController.update)

// Logout //
router.get('/logout', userController.logout)

// Delete //
router.put('/',userController.delete)



module.exports = router;
