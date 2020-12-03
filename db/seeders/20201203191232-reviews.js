'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
      return queryInterface.bulkInsert('Reviews', [{
        stars: 'John Doe',
        review: false
      }], {});
    
  },

  down: (queryInterface, Sequelize) => {
      
      return queryInterface.bulkDelete('People', null, {});
    
  }
};
