const ResponseHandler = require('../models/ResponseHandler');
const { Category, Color } = require('../database/models');

const categoryController = {
  getColors: async (req, res) => {
    const categoryId = req.params.id;
    console.log(categoryId);
    const category = await Category.findByPk(categoryId, {
      include: {
        model: Color, as: "colors", attributes: ['id', 'name',], through: { attributes: [] }
      }
    });
    console.log(JSON.stringify(category, null, 4));
    const colorCategories = await category.getColorCategories();
    // console.log(category.constructor.prototype);
    console.log(JSON.stringify(colorCategories, null, 4));
    const responseHandler = new ResponseHandler(200, 'Listado de colores', category.colors, req.originalUrl);
    responseHandler.sendResponse(res);
  }
};

module.exports = categoryController;