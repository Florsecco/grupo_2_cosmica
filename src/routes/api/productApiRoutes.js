const express = require('express');
const router = express.Router();
const authMiddleware = require("../../middlewares/authMiddleware");
const productApiController = require('../../controllers/api/productApiController');
const { validateCreateProduct } = require('../../validators/productValidator');

const { uploadMemory } = require('../../middlewares/productMulterMemoryMiddleware');

// Post
router.post('/create', uploadMemory.single('product'), authMiddleware, validateCreateProduct, productApiController.create);

router.get('/', productApiController.getAll);

router.get("/:productId", productApiController.getProduct);

module.exports = router;