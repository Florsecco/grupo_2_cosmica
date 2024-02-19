const express = require("express");
const router = express.Router();
const categoryController = require('../controllers/categoryController');

router.get("/:id/colors", categoryController.getColors);

module.exports = router;