"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "productcarts",
      [
        {
          id: 1,
          product_id: 1,
          cart_id: 1,
          product_price: 9.99,
        },
        {
          id: 2,
          product_id: 2,
          cart_id: 1,
          product_price: 12,
        },
        {
          id: 3,
          product_id: 3,
          cart_id: 2,
          product_price: 12.8,
        },
        {
          id: 4,
          product_id: 4,
          cart_id: 3,
          product_price: 13.5,
        },
        {
          id: 5,
          product_id: 5,
          cart_id: 3,
          product_price: 18,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("productcarts", null, {});
  },
};
