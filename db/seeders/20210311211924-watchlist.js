'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Watchlists', [
        {userId: 1, createdAt: new Date(), updatedAt: new Date()},
        {userId: 2, createdAt: new Date(), updatedAt: new Date()},
        {userId: 3, createdAt: new Date(), updatedAt: new Date()},
        {userId: 4, createdAt: new Date(), updatedAt: new Date()},
        {userId: 5, createdAt: new Date(), updatedAt: new Date()},
      ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Watchlists', null, {});
  }
};
