const { Product, ColorProduct, sequelize } = require('../../database/models');

const { saveImage } = require('../../middlewares/productMulterMemoryMiddleware');

const ResponseHandler = require('../../models/ResponseHandler');
const { validationResult } = require('express-validator');
const productsController = {
  create: async (req, res) => {
    const transaction = await sequelize.transaction();
    try {
      const errors = validationResult(req);
      // console.log(req.body);
      // console.log(errors);
      if (!errors.isEmpty()) {
        if (transaction) await transaction.rollback();
        const responseHandler = new ResponseHandler(404, "Errores en el formulario.", errors.mapped(), req.originalUrl);
        return responseHandler.sendResponse(res);
      }

      const colorStocks = JSON.parse(req.body.colorStocks);

      const price = parseInt(req.body.price);
      const discount = parseInt(req.body.discount);
      const final_price = price - (price * discount) / 100;

      const nombreArchivo = saveImage(req.file);
      const product = await Product.create({
        name: req.body.name,
        description_short: req.body.description_short,
        description_long: req.body.description_long,
        status: 1,
        image: nombreArchivo,
        category_id: req.body.category_id,
        ingredients: req.body.ingredients,
        price,
        discount,
        final_price,
        brand_id: req.body.brand
      }, { transaction });
      console.log(JSON.stringify(product, null, 4));
      console.log(product.id);
      const product_id = product.id;
      console.log(req.body);
      console.log(colorStocks);
      for (const colorStock of colorStocks) {
        console.log(colorStock);
        await ColorProduct.create({
          product_id: product_id,
          color_id: colorStock.color_id,
          stock: colorStock.stock
        }, { transaction });
      };

      await transaction.commit();
      const responseHandler = new ResponseHandler(200, "Listado.", [], req.originalUrl);
      responseHandler.sendResponse(res);
    } catch (error) {
      if (transaction) await transaction.rollback();
      console.log(error);
      res.send(error.message);
    }
  }
};

module.exports = productsController;