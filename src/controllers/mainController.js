const {index, findOne} = require("../models/product.model");

const mainController = {
  home: (req, res) => {
    res.render("home", { products: index() });
  },
};

module.exports = mainController;
