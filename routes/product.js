const express = require('express');

const router = express.Router();

const productController = require('../controllers/producController')

router.get('/cart', productController.cart);

router.get('/productDetail', productController.productDetail);

router.get('/createProduct', productController.createProduct);

module.exports = router;