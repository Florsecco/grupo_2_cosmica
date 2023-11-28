const { findOne, index, create } = require("../models/product.model");
const path = require('path');

const productController = {
  index: (req, res) => {
    const products = index();
    console.log(products);
    // const offers
    res.render("./products/products", { products })
  },
  cart: (req, res) => {
    res.render("./products/cart");
  },
  productDetail: (req, res) => {
    const { id } = req.params;
    console.log(id);
    const product = findOne(id);
    if (product === undefined)
      res.redirect('../not-found');
    console.log(product);
    res.render("./products/productDetail", { product });
  },
  createProduct: (req, res) => {
    res.render("./products/createProduct");
  },
  editProduct: (req, res) => {
    res.render("./products/editProduct");
  },
  create: (req, res) => {
    const { name, description, price, discount, stock, color, category } = req.body;
    const products = index();
    let id;
    if (products.length > 0) {

      id = Math.max(...products.map(x => x.id)) + 1;
    }
    else {
      id = 1;
    }
    const product = {
      id,
      name,
      description,
      price,
      discount,
      image: req.file.filename,
      stock,
      category,
      color
    };
    products.push(product);
    create(products);
    res.redirect('/');
  },
  productEdit: (req, res) => {
    const { id } = req.params;
    const product = findOne(id);
    res.render("./products/editProduct", { product });
  },
};

module.exports = productController;
