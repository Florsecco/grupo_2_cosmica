const { findOne, index, generateId ,create } = require("../models/product.model");

const toThousand = (numero) =>{
  const opciones = {
      style: 'decimal',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
  };
  const formatoNumero = new Intl.NumberFormat('de-DE', opciones);
  return formatoNumero.format(numero);
}

const productController = {
  index: (req, res) => {
    const products = index();
    const offers = products.filter((product)=>product.discount!=0)
    const featured = products.filter((product)=>product.discount==0)
    res.render("./products/products", { offers,featured,toThousand })
  },
  cart: (req, res) => {
    res.render("./products/cart");
  },
  productDetail: (req, res) => {
    const { id } = req.params;
    const products= index();
    const product = findOne(id);
    if (product === undefined)
      res.redirect('../not-found');
    res.render("./products/productDetail", { product,products, toThousand });
  },
  createProduct: (req, res) => {
    res.render("./products/createProduct");
  },
  create: (req, res) => {
    const { name, description, price, discount, stock, color, category } = req.body;
    const products = index();
    let id = generateId();
    const product = {
      id,
      name,
      description,
      price: parseInt(price),
      discount: parseInt(discount),
      image: req.file.filename,
      stock: parseInt(stock),
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
  update: (req, res) => {
    const id = req.params.id
    res.redirect(`/products/${id}`)
    
  },
  delete: (req, res) => {
    const productos = index();
    const id = req.params.id;
    const produtosRestantes = productos.filter(product => product.id != id);
    create(produtosRestantes)
    res.redirect('/products')
  }
};

module.exports = productController;
