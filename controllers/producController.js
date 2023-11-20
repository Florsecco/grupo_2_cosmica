const productController = {
  cart: (req, res) => {
    res.render("./products/cart");
  },
  productDetail:(req, res) => {
    res.render('./products/productDetail')
},
createProduct: (req, res) => {
    res.render('./products/createProduct')
}
};

module.exports = productController;
