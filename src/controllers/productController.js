const { findOne, index, create } = require("../models/product.model");

const productController = {
  index: (req, res) => {
    res.render("./products/products", { products: index() })
  },
  cart: (req, res) => {
    res.render("./products/cart");
  },
  productDetail: (req, res) => {
    const { id } = req.params;
    res.render("./products/productDetail", { product: findOne(id) });
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
