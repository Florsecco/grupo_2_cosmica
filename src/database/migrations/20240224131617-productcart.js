'use strict';

const { DataTypes } = require("sequelize");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.createTable('productcarts', {
      id: {
        type: DataTypes.INTEGER(10),
        primaryKey: true,
        autoIncrement: true,
      },
      product_id: {
        type: DataTypes.INTEGER(10),
        allowNull: false,
        references: {
          model: {
            tableName: 'products',
            // schema: 'schema'
          },
          key: 'id'
        }
      },
      cart_id: {
        type: DataTypes.INTEGER(10),
        allowNull: false,
        references: {
          model: {
            tableName: 'carts',
            // schema: 'schema'
          },
          key: 'id'
        }
      },
      product_price: {
        type: DataTypes.FLOAT(10),
        allowNull: false,
      },
     });
    
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.dropTable('productcarts');
    
  }
};
