const { Category, sequelize } = require('../../database/models');


const categoriesApiController = {
  getOne: async (req, res) => {
    try {

      const { idCat } = req.params
      console.log(idCat);
      const category = await Category.findByPk(idCat, {
        include: [{ association: 'products' }],
      });
      res.json(category)
    } catch (error) {
      console.log(error);
    }
  },
}


module.exports = categoriesApiController;