const { findOne, index, create } = require("../models/product.model");

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

    console.log(req.body);
    const products = index();
    const object = {
      id: 1,
      name: "Base de maquillaje 1",
      description: "descripcion1",
      price: 9.99,
      discount: 0,
      image: "base-1.jpg",
      stock: 1,
      category: "bases",
      colors: "rosa"
    };
    products.push(object);
    create(products);
    res.redirect('/');
  },
  productEdit: (req, res) => {
    const { id } = req.params;
    const product = findOne(id);
    console.log(product);
    res.render("./products/editProduct", { product });
  },
};

module.exports = productController;
