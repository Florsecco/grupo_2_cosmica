const express = require('express');
const router = express.Router();
const authMiddleware = require("../../middlewares/authMiddleware");
const productApiController = require('../../controllers/api/productApiController');

const { uploadMemory } = require('../../middlewares/productMulterMemoryMiddleware');

// Post
router.post('/create', uploadMemory.single('product'), authMiddleware, productApiController.create);

module.exports = router;