const {index, findOne} = require("../models/product.model");

const toThousand = (numero) =>{
    const opciones = {
        style: 'decimal',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    };
    const formatoNumero = new Intl.NumberFormat('de-DE', opciones);
    return formatoNumero.format(numero);
}


const mainController = {
  home: (req, res) => {
    const products = index();
    const offers = products.filter((product)=>product.discount!=0)
    const featured = products.filter((product)=>product.discount==0)
    res.render("home", { offers, featured, toThousand });
  },
};

module.exports = mainController;
