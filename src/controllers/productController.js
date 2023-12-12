const { findOne, index, generateId ,create, update } = require("../models/product.model");

const fs = require('fs')

const path = require('path')

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
    const product = findOne(id)
    const { name, description, price, discount, stock, color, category } = req.body;
    
    product.name = name ? name : product.name
    product.description = description ? description : product.description
    product.price = price ? price : product.price
    product.discount = discount ? discount : product.discount
    product.stock = stock ? stock : product.stock
    product.color = color ? color : product.color
    product.category = category ? category : product.category

    if (req.file != undefined) {
      const imagenAnterior = product.image;
      product.image = req.file.filename;
      fs.unlinkSync(path.join(__dirname, '../public/img/products', imagenAnterior));
    }
    update(product)

    res.redirect(`/products/${id}`)
    
  },
  delete: (req, res) => {
    const productos = index();
    const id = req.params.id;
    let img
    const productosRestantes = productos.filter(product => {
      if(product.id != id){
        return product
      }else{
        img = product.image
      }

    });
    create(productosRestantes)
    
    fs.unlinkSync(path.join(__dirname, '../../public/img/products', img));
    res.redirect('/products')
  }
};

module.exports = productController;
