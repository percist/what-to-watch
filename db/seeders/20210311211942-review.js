'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Reviews', [
        { stars: 5, review: 'What a great film!', userId: 1, movieId: 7, createdAt: new Date(), updatedAt: new Date() },
        { stars: 1, review: 'I hated it.', userId: 1, movieId: 4, createdAt: new Date(), updatedAt: new Date() },
        { stars: 4, review: 'Family fun.', userId: 1, movieId: 2, createdAt: new Date(), updatedAt: new Date() },
        { stars: 3, review: 'left in the middle', userId: 3, movieId: 2, createdAt: new Date(), updatedAt: new Date() },
        { stars: 5, review: 'my favorite movie!', userId: 4, movieId: 2, createdAt: new Date(), updatedAt: new Date() },
        { stars: 5, review: 'jolly good times', userId: 5, movieId: 3, createdAt: new Date(), updatedAt: new Date() },
        { stars: 3, review: 'whose idea was this', userId: 4, movieId: 3, createdAt: new Date(), updatedAt: new Date() },
        { stars: 5, review: 'golden age of cinema', userId: 3, movieId: 3, createdAt: new Date(), updatedAt: new Date() },
        { stars: 5, review: 'this deserves awards', userId: 1, movieId: 3, createdAt: new Date(), updatedAt: new Date() },
     
      ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Reviews', null, {});
  }
};
