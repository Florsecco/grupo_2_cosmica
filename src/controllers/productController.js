const {
  findOne,
  index,
  generateId,
  create,
  update,
} = require("../models/product.model");

const db = require("../database/models");
const Product = db.Product;
const Category = db.Category;
const Color = db.Color;
const Brand = db.Brand;
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
  // index: (req, res) => {
  //   const products = index();
  //   const offers = products.filter((product) => product.discount != 0);
  //   const featured = products.filter((product) => product.discount == 0);
  //   res.render("./products/products", { offers, featured, toThousand });
  // },

  // el index esta listo solo falta descomentar el render
  index: async (req, res) => {
    try {
      const featured = await Product.findAll({
        where: {
          discount: 0,
        },
      });
      const offers = await Product.findAll({
        where: {
          discount: { [Op.ne]: 0 },
        },
      });
      res.json(offers);
      //res.render("./products/products", { offers, featured, toThousand });
    } catch (error) {
      console.log(error);
      res.send(error.message);
    }
  },
// esto se cambia si hacemos el cart nomas
  cart: (req, res) => {
    res.render("./products/cart");
  },
  // productDetail: (req, res) => {
  //   const { id } = req.params;
  //   const products = index();
  //   const product = findOne(id);
  //   if (product === undefined) res.redirect("../not-found");
  //   res.render("./products/productDetail", { product, products, toThousand });
  // },
  //aqui solo falta descomentar el render 
  detail: async (req, res) => {
    try {
      const { id } = req.params;
      const products = await Product.findAll();
      const product = await Product.findByPk(id);
      if (product === undefined) res.redirect("../not-found");
      res.json(product);
      // res.render("./products/productDetail", { product, products, toThousand });
    } catch (error) {
      console.log(error);
      res.send(error.message);
    }
  },
  createProduct: async(req, res) => {
    try {
      const categories = await Category.findAll()
      const colors = await Color.findAll()
      const brands = await Brand.findAll()
      res.render("./products/createProduct", {categories,colors,brands});
    } catch (error) {
      console.log(error);
      res.send(error.message);
    }
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
      const precio = parseInt(req.body.price);
      const descuento = parseInt(req.body.discount);
      const finalPrice = precio - (precio * descuento) / 100;
      const product = await Product.create({
        name: req.body.name,
        description_short: req.body.description_short,
        description_long: req.body.description_long,
        status: 1,
        image: "req.file.filename",
        category_id: req.body.category,
        ingredients: req.body.ingredients,
        price: precio,
        discount: descuento,
        final_price: finalPrice,
        brand_id: req.body.brand,
      });

      res.json(product);
    } catch (error) {
      console.log(error);
      res.send(error.message);
    }
  },
  productToEdit: async(req,res)=>{
    //aqui falta ver lo de los colores
    try {
      const { id } = req.params;
      const categories = await Category.findAll()
      const colors = await Color.findAll()
      const brands = await Brand.findAll()
      const product = await Product.findByPk(id,{
        include: [{association:'colors'}]
      });
      console.log('producto',product);
      if (product === undefined) res.redirect("../not-found");
      res.render("./products/editProduct", { product,categories,colors,brands });
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
  // 'delete': (req, res) => {
  //   const productos = index();
  //   const id = req.params.id;
  //   let img;
  //   const productosRestantes = productos.filter((product) => {
  //     if (product.id != id) {
  //       return product;
  //     } else {
  //       img = product.image;
  //     }
  //   });
  //   create(productosRestantes);

  //   fs.unlinkSync(path.join(__dirname, "../../public/img/products", img));
  //   res.redirect("/products");
  // },
  delete: async(req,res)=>{
    try {
      let img 
      const { id } = req.params;
      const product = await Product.findByPk(id);
      if (product === undefined) {
        res.redirect("../not-found")}

      else{
        img = product.image
      await Product.destroy({
        where:{
            id:id
        }
    })}
    fs.unlinkSync(path.join(__dirname, "../../public/img/products", img));
    res.send("flor ");
    // res.redirect("/products");    
    } catch (error) {
      console.log(error);
      res.send(error.message);
    }
  }
};

module.exports = productController;