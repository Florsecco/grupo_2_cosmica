const { Product, ColorProduct,Category,User, Color, Review, sequelize } = require('../../database/models');

const { Op } = require("sequelize");
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
  },
  count: async (req, res) => {
    try {
      const categories = await Category.findAll({
        attributes: ["id","name"],
      });
      const products = await Product.findAll({
        attributes: ["id"],
      });
      const users = await User.findAll({
        attributes: ["id"],
      });
      res.json({
        countCat:categories.length,
        categories: categories,
        countProd: products.length,
        countUser: users.length
      });
    } catch (error) {
      console.log(error);
      res.send(error.message);
    }
  },
  getLast:async (req, res) => {
    try {
      const products = await Product.findAll({
        order:[['id','DESC']],
        limit: 1
      });
      
      res.json(products);
    } catch (error) {
      console.log(error);
      res.send(error.message);
    }
  },
  getAll: async (req, res) => {
    const transaction = await sequelize.transaction();
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const name = req.query.name || "";
    const offset = (page - 1) * limit;

    try {
      const {count, rows} = await Product.findAndCountAll({
        where: {
          name: {
            [Op.like]: `%${name}%`
          }
        },
        attributes: ["id", "name", "description_short", "image"],
        include: [{
          model: Color,
          as: "colors",
          attributes: ["id", "name"],
          through: {attributes: []}
        }],
        limit,
        offset,
        distinct: true
      });

      console.log(count);

      const productsWithDetail = rows.map((product) => {
        return {
          ...product.toJSON(),
          detail: `http://localhost:3010/api/products/${product.id}`
        };
      });

      const results = await Product.findAll({
        attributes: [
          [sequelize.fn('COUNT', sequelize.col('product.id')), 'totalProducts']
        ],
        group: "category_id",
        include: [{
          model: Category,
          as: "category",
          attributes: ["name"]
        }]
      });

      const countByCategory = {};
      results.forEach(result => {
        const name = result.category.name;
        const totalProducts = result.getDataValue('totalProducts');
        countByCategory[name] = totalProducts;
      });

      const products = {
        count,
        countByCategory,
        products: productsWithDetail
      };

      await transaction.commit();
      const responseHandler = new ResponseHandler(200, "Listado de productos.", products, req.originalUrl);
      responseHandler.sendResponse(res);
    } catch (error) {
      if (transaction) await transaction.rollback();
      console.log(error);
      const responseHandler = new ResponseHandler(500, "Error al obtener los productos.", [], req.originalUrl);
      responseHandler.sendResponse(res);
    };
  },
  getProduct: async (req, res) => {
    const transaction = await sequelize.transaction();
    const { productId } = req.params;
    let responseHandler;
    try {
      const result = await Product.findByPk(productId, {
        attributes: {exclude: ["status", "created_at", "updated_at"]},
        include: [{
          model: Review,
          attributes: ["id", "user_id", "comment", "rating"]
        },
        {
          model: ColorProduct,
          as: "stocks",
          attributes: {exclude: ["product_id"]}
        },
        {
          model: Color,
          as: "colors",
          attributes: ["id", "name"],
          through: {attributes: []}
        }]
      });

      const product = {
        ...result.toJSON(),
        image: `http://localhost:3010/img/products/${result.image}`
      };

      if (product) {
        responseHandler = new ResponseHandler(200, "Product.", product, req.originalUrl);
      }
      else {
        responseHandler = new ResponseHandler(204, "Product.", [], req.originalUrl);
      }
      await transaction.commit();
      responseHandler.sendResponse(res);
    } catch (error) {
      console.log(error);
      if (transaction) await transaction.rollback();
      responseHandler = new ResponseHandler(204, "Error al obtener el producto.", [], req.originalUrl);
      responseHandler.sendResponse(res);
    }
  }
};

module.exports = productsController;