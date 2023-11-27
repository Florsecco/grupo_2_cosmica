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
    console.log('entre');
    const products = index();
    const object = {
      id: 2,
      tittle: "Delineador de ojos 1",
      price: 5.99,
      discount: 0,
      img: "delineador-1.jpg"
    };
    console.log('entre');
    if (products === null) {
      console.log('entre');
      products = [];
    }

    products.push(object);
    create(products);
    res.redirect('/');
  }
};

module.exports = productController;
