'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('categories', [
      {
       id:1,
       name:'bases',
       image:'category1.jpeg'
      },
      {
        id:2,
        name:'rubores',
        image:'category2.jpeg'
       },
       {
        id:3,
        name:'delineadores',
        image:'category3.jpg'
       },
       {
        id:4,
        name:'labiales',
        image:'category4.jpg'
       },

    ], {});
    
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('categories', null, {});
    
  }
};
