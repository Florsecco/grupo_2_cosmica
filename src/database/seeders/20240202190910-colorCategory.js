'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

     await queryInterface.bulkInsert('color_category', [{
        id:1,
        color_id:1,
        category_id:4
      },{
        id:2,
        color_id:2,
        category_id:3
      },{
        id:3,
        color_id:3,
        category_id:2
      },{
        id:4,
        color_id:4,
        category_id:1
      }], {});
    
  },

  async down (queryInterface, Sequelize) {

      await queryInterface.bulkDelete('color_category', null, {});
     
  }
};
