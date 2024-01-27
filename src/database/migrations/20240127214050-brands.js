"use strict";

const { dataTypes } = require("sequelize");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("brands", {
      id: {
        type: dataTypes.INTEGER(10),
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: dataTypes.STRING(100),
        allowNull: false,
      },
      created_at: dataTypes.TIMESTAMP,
      updated_at: dataTypes.TIMESTAMP,
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("brands");
  },
};
