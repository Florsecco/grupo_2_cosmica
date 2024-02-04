"use strict";

const { DataTypes } = require("sequelize");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("review", {
      id: {
        type: DataTypes.INTEGER(10),
        primaryKey: true,
        autoIncrement: true,
      },
      product_id: {
        type: DataTypes.INTEGER(10),
        allowNulle: false,       
      },
      user_id: {
        type: DataTypes.INTEGER(15),
        allowNulle: false
      },
      comment: {
        type: DataTypes.STRING(255),
        allowNulle: false
      },
      rating: {
        type: DataTypes.INTEGER(10),
        allowNulle: false
      }
    });
  },

  async down(queryInterface, Sequelize) {
    
    await queryInterface.dropTable('review');
     
  },
};
