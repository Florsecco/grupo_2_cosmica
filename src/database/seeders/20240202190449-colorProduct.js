'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('color_products', [{
       id: 1,
       color_id:1,
       product_id:1,
       stock:10
     },{
      id: 2,
      color_id:2,
      product_id:2,
      stock:5    
    },{
      id: 3,
      color_id:3,
      product_id:3,
      stock:6    
    },
    {
      id: 4,
      color_id:4,
      product_id:4,
      stock:11    
    }
    ], {});
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('color_products', null, {});
    
  }
};
