const products = [
  {
    id: 1,
    tittle: "Base de maquillaje 1",
    price: 9.99,
    discount: 0,
    img: "base-1.jpg",
  },
  {
    id: 2,
    tittle: "Delineador de ojos 1",
    price: 5.99,
    discount: 0,
    img: "delineador-1.jpg",
  },
  {
    id: 3,
    tittle: "Lápiz de labios 1",
    price: 10.99,
    discount: 0,
    img: "labial-1.jpg",
  },
  {
    id: 4,
    tittle: "Rubor en polvo",
    price: 7.99,
    discount: 0,
    img: "rubor-1.jpg",
  },
  {
    id: 5,
    tittle: "Delineador de ojos 2",
    price: 11.99,
    discount: 20,
    img: "delineador-2.jpg",
  },
  {
    id: 6,
    tittle: "Base de maquillaje 2",
    price: 6.99,
    discount: 10,
    img: "base-2.jpg",
  },
  {
    id: 7,
    tittle: "Lápiz de labios 2",
    price: 9.99,
    discount: 5,
    img: "labial-2.jpg",
  },
  {
    id: 8,
    tittle: "Paleta de iluminador y rubor",
    price: 15.99,
    discount: 20,
    img: "rubor-2.jpg"
  }
];

const productController = {
  cart: (req, res) => {
    res.render("./products/cart");
  },
  productDetail: (req, res) => {
    const { idProduct } = req.params;
    const product = products.find(x => x.id == idProduct);
    res.render("./products/productDetail", { product });
  },
  createProduct: (req, res) => {
    res.render("./products/createProduct");
  },  
  editProduct: (req, res) => {
    res.render("./products/editProduct");
  }
};

module.exports = productController;
