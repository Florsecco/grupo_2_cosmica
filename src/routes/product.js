const express = require("express");
// const { join } = require("path");
const path = require('path');
const router = express.Router();
const multer = require('multer');
// const upload = multer({ dest: '.public/img/products/' })
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, "../public", '/img/products'));
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname))
    }
});

const upload = multer({ storage: storage });

const productController = require("../controllers/productController");

router.get("/", productController.index);
router.get("/cart", productController.cart);

router.get("/create", productController.createProduct);
router.get("/editProduct", productController.editProduct);

router.get("/:id", productController.productDetail);
router.get("/:id/edit", productController.productEdit);

router.post("/", upload.single('product'), productController.create);
module.exports = router;
