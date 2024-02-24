"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "carts",
      [
        {
          id: 1,
          user_id: 1,
          total: 21.99,
          items: 2,
        },
        {
          id: 2,
          user_id: 1,
          total: 12.8,
          items: 1,
        },
        {
          id: 3,
          user_id: 1,
          total: 31.5,
          items: 1,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("carts", null, {});
  },
};
