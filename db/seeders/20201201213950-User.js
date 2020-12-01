'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Users', [{
        name: 'John Doe', email: 'john@doe.com', hashedPassword: 'hashedPassword', watchedListId: '1', createdAt: new Date(), updatedAt: new Date()   
      }], {});
    
  },

  down: (queryInterface, Sequelize) => {
  return queryInterface.bulkDelete('Users', null, {});
  
  }
};
