const express = require("express");

const router = express.Router();

const productController = require("../controllers/productController");

router.get("/", productController.index);
router.get("/cart", productController.cart);

router.get("/create", productController.createProduct);
router.get("/editProduct", productController.editProduct);

router.get("/:id", productController.productDetail);

router.post("/", productController.create);
module.exports = router;
