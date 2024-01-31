'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('brands', [{
      id:1,
      name: 'YSL',
     },{
      id:2,
      name: 'Dior',
     },{
      id:3,
      name:'Rare'
     },{
      id:4,
      name:'Fenty'
     }], {});
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('brands', null, {});
  }
};
