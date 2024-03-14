const express = require('express');
const router = express.Router();

const categoriesApiController = require('../../controllers/api/categoriesApiController');


router.get('/:idCat', categoriesApiController.getOne);


module.exports = router;