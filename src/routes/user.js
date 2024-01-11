const express = require("express");
const userController = require("../controllers/userController");
const upload = require('../middlewares/userMulterMiddleware')
const authMiddleware = require("../middlewares/authMiddleware");
const guestMiddleware = require("../middlewares/guestMiddleware");

const { validateUser, validatePassword, validateLogin } = require("../validators/userValidator");
const multer = require('multer');
const storage = multer.memoryStorage(); // Almacenamiento en memoria
const uploadMemory = multer({
    storage: storage,
});

const router = express.Router();

// Register //

router.get("/register", userController.register);
router.post("/register", uploadMemory.single("avatar"), validateUser, validatePassword, userController.processRegister);

// Login //

router.get("/login", guestMiddleware, userController.login);
router.post("/login", validateLogin, userController.processLogin);

// Profile //

router.get("/profile", authMiddleware, userController.profile);

// Edit //

router.get("/edit", authMiddleware, userController.edit);
router.put('/edit', upload.single('avatar'), validateUser, userController.update)

// Logout //
router.get('/logout', userController.logout)

// Delete //
router.put('/', userController.delete)



module.exports = router;
