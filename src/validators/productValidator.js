const { body } = require('express-validator');
const { Category, Brand } = require('../database/models');

exports.validateCreateProduct = [
  body('name')
    .trim()
    .notEmpty().withMessage('Debe ingresar el nombre del producto.').bail()
    .isLength({ min: 5 }).withMessage("El nombre debe tener al menos 5 letras"),
  body('description_short')
    .trim()
    .notEmpty().withMessage('Debe ingresar la descripcion corta.').bail()
    .isLength({ min: 20 }).withMessage("La descripcion corta debe tener 20 letras como minimo."),
  body('description_long')
    .trim()
    .notEmpty().withMessage('Debe ingresar la descripcion larga.').bail()
    .isLength({ min: 20 }).withMessage("La descripcion larga debe tener 20 letras como minimo."), ,
  body('category')
    .notEmpty().withMessage('Debe seleccionar una categoria para el producto.').bail()
    .custom(async (value) => {
      const categoryExist = await Category.findByPk(value);
      if (categoryExist)
        throw new Error('La categoria seleccionada no existe');
      return true;
    }),
  body('brand')
    .notEmpty().withMessage('Debe seleccionar una marca para el producto.').bail()
    .custom(async (value) => {
      const brandExist = await Brand.findByPk(value);
      if (brandExist)
        throw new Error('La marca seleccionada no existe');
      return true;
    }),
  body('ingredients')
    .notEmpty().withMessage('Debe ingresar los ingredientes del producto.').bail(),
  body('price')
    .notEmpty().withMessage('Debe ingresar el precio del producto.').bail(),
  body('discount')
    .notEmpty().withMessage("Debe ingresar el descuento del producto.").bail(),
  body('color')
    .notEmpt().withMessage("Debe ingresar un color para el producto").bail(),
  body('stock')

];

exports.validateUpdateProduct = [

];