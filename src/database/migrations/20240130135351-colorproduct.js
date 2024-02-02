'use strict';

const { DataTypes } = require("sequelize");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.createTable('color_product', { 
      id: {
        type: DataTypes.INTEGER(10),
        primaryKey: true,
        autoIncrement: true
    },
    color_id: {
        type: DataTypes.INTEGER(10),
        allowNull: true,
        references: {
          model: {
            tableName: 'colors',
            //schema: 'schema'
          },
          key: 'id'
        },
    },
    product_id: {
        type: DataTypes.INTEGER(10),
        allowNull: true,
        references: {
          model: {
            tableName: 'products',
            //schema: 'schema'
          },
          key: 'id'
        },
    },  
    stock: {
        type: DataTypes.INTEGER(10),
        allowNull: false
    }
     });

  },

  async down (queryInterface, Sequelize) {

    await queryInterface.dropTable('color_product');

  }
};
