const express = require("express");

const router = express.Router();

const productController = require("../controllers/productController");

router.get("/cart", productController.cart);

router.get("/productDetail/:idProduct", productController.productDetail);

router.get("/createProduct", productController.createProduct);

module.exports = router;
