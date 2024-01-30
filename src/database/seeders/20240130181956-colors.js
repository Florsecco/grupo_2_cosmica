'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('colors', [{
      id:1,
      name: 'red',
     },{
      id:2,
      name: 'pink',
     },{
      id:3,
      name:'orange'
     },{
      id:4,
      name:'black'
     }], {});
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('colors', null, {});
    
  }
};
