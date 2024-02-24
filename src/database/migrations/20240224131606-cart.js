'use strict';

const { DataTypes } = require("sequelize");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.createTable('carts', { 
      id: {
        type: DataTypes.INTEGER(10),
        primaryKey: true,
        autoIncrement: true,
      },
      user_id: {
        type: DataTypes.INTEGER(10),
        allowNull: false,
        references: {
          model: {
            tableName: 'users',
            // schema: 'schema'
          },
          key: 'id'
        }
      },
      total: {
        type: DataTypes.FLOAT(10),
        allowNull: false,
      },
      items: {
        type: DataTypes.INTEGER(10),
        allowNull: true,
      },
      updated_at: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      deleted_at: {
        allowNull: true,
        type: DataTypes.DATE,
      },
     });
    
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.dropTable('carts');
    
  }
};
