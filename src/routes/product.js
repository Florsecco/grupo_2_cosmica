const express = require("express");
const router = express.Router();

const productController = require("../controllers/productController");
const upload = require('../middlewares/multerMiddleware');
const authMiddleware = require("../middlewares/authMiddleware");

// Products list //
router.get("/", productController.index);

// Cart //
router.get("/cart", productController.cart);


// Create product //
router.get("/create",authMiddleware, productController.createProduct);
router.post("/", upload.single('product'), productController.create);

// Product Detail //

router.get("/:id", productController.productDetail);

// Edit product //
router.get("/:id/edit", productController.productEdit);
router.put("/:id", upload.single('product') ,productController.update)

// delete element //
router.delete('/:id',productController.delete)

module.exports = router;
