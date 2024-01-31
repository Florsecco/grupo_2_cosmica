const {
  findOne,
  index,
  generateId,
  create,
  update,
} = require("../models/product.model");

const db = require("../database/models");
const Product = db.Product;
const { Op } = require("sequelize");

const fs = require("fs");

const path = require("path");

const toThousand = (numero) => {
  const opciones = {
    style: "decimal",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  };
  const formatoNumero = new Intl.NumberFormat("de-DE", opciones);
  return formatoNumero.format(numero);
};

const productController = {
  index: (req, res) => {
    const products = index();
    const offers = products.filter((product) => product.discount != 0);
    const featured = products.filter((product) => product.discount == 0);
    res.render("./products/products", { offers, featured, toThousand });
  },
  list: async (req, res) => {
    try {
      const featuredProducts = await Product.findAll({
        where: {
          discount: 0,
        },
      });
      const offersProducts = await Product.findAll({
        where: {
          discount: { [Op.ne]: 0 },
        },
      });
      res.json(offersProducts);
    } catch (error) {
      console.log(error);
      res.send(error.message);
    }
  },

  cart: (req, res) => {
    res.render("./products/cart");
  },
  productDetail: (req, res) => {
    const { id } = req.params;
    const products = index();
    const product = findOne(id);
    if (product === undefined) res.redirect("../not-found");
    res.render("./products/productDetail", { product, products, toThousand });
  },
  detail: async (req, res) => {
    try {
      const { id } = req.params;
      const product = await db.Product.findByPk(id);
      if (product === undefined) res.redirect("../not-found");
      res.json(product);
    } catch (error) {
      console.log(error);
      res.send(error.message);
    }
  },
  createProduct: (req, res) => {
    res.render("./products/createProduct");
  },
  'create': (req, res) => {
    const { name, description, price, discount, stock, color, category } =
      req.body;
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
      color,
    };
    products.push(product);
    create(products);
    res.redirect("/");
  },
  create2: async (req, res) => {
    try {
      // hay que cambiar el formulario
      const precio = parseInt(req.body.price);
      const descuento = parseInt(req.body.discount);
      const finalPrice = precio - (precio * descuento) / 100;
      const product = await Product.create({
        name: req.body.name,
        description_short: req.body.description_short,
        description_long: req.body.description_long,
        status: 1,
        image: "req.file.filename",
        category_id: req.body.category_id,
        ingredients: req.body.ingredients,
        price: precio,
        discount: descuento,
        final_price: finalPrice,
        brand_id: req.body.brand_id,
      });

      res.json(product);
    } catch (error) {
      console.log(error);
      res.send(error.message);
    }
  },
  'productEdit': (req, res) => {
    const { id } = req.params;
    const product = findOne(id);
    res.render("./products/editProduct", { product });
  },
  productToEdit: async(req,res)=>{
    try {
      const { id } = req.params;
      const product = await Product.findByPk(id);
      if (product === undefined) res.redirect("../not-found");
      res.json(product)
    } catch (error) {
      console.log(error);
      res.send(error.message);
    }
  },
  update: (req, res) => {
    const id = req.params.id;
    const product = findOne(id);
    const { name, description, price, discount, stock, color, category } =
      req.body;

    product.name = name ? name : product.name;
    product.description = description ? description : product.description;
    product.price = price ? price : product.price;
    product.discount = discount ? discount : product.discount;
    product.stock = stock ? stock : product.stock;
    product.color = color ? color : product.color;
    product.category = category ? category : product.category;

    if (req.file != undefined) {
      const imagenAnterior = product.image;
      product.image = req.file.filename;
      fs.unlinkSync(
        path.join(__dirname, "../../public/img/products", imagenAnterior)
      );
    }
    update(product);

    res.redirect(`/products/${id}`);
  },
  'delete': (req, res) => {
    const productos = index();
    const id = req.params.id;
    let img;
    const productosRestantes = productos.filter((product) => {
      if (product.id != id) {
        return product;
      } else {
        img = product.image;
      }
    });
    create(productosRestantes);

    fs.unlinkSync(path.join(__dirname, "../../public/img/products", img));
    res.redirect("/products");
  },
  destroy: async(req,res)=>{
    try {
      await Product.destroy({
        where:{
            id:req.params.id
        }
    })
    } catch (error) {
      console.log(error);
      res.send(error.message);
    }
  }
};

module.exports = productController;