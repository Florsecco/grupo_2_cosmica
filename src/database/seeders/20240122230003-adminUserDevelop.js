'use strict';

const bcrypt = require('bcryptjs');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('users', [{
      id: 1,
      first_name: 'admin',
      last_name: 'admin',
      email: 'admin@admin.com',
      password: bcrypt.hashSync('admin1234', 10),
      status: 1,
      image: "avatar-1.png",
      address: "Calle Admin",
      profile_id: 1,
      created_at: new Date(),
      updated_at: new Date(),
    },{
      id: 2,
      first_name: 'cliente',
      last_name: 'apellidoCliente',
      email: 'cliente@cliente.com',
      password: bcrypt.hashSync('cliente1234', 10),
      status: 1,
      image: "avatar-2.png",
      address: "Calle Cliente",
      profile_id: 3,
      created_at: new Date(),
      updated_at: new Date(),
    }], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('users', null, {})
  }
};
