'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('WatchedMovies', [
        { watchlistId: 1, movieId: 2, watchStatus: 'watched', createdAt: new Date(), updatedAt: new Date() },
        { watchlistId: 1, movieId: 3, watchStatus: 'watched', createdAt: new Date(), updatedAt: new Date() }, 
        { watchlistId: 1, movieId: 5, watchStatus: 'watched', createdAt: new Date(), updatedAt: new Date() },
        { watchlistId: 1, movieId: 6, watchStatus: 'want', createdAt: new Date(), updatedAt: new Date() },
        { watchlistId: 1, movieId: 8, watchStatus: 'watched', createdAt: new Date(), updatedAt: new Date() },
        { watchlistId: 1, movieId: 9, watchStatus: 'want', createdAt: new Date(), updatedAt: new Date() },
        { watchlistId: 1, movieId: 15, watchStatus: 'watched', createdAt: new Date(), updatedAt: new Date() },
        { watchlistId: 1, movieId: 46, watchStatus: 'watched', createdAt: new Date(), updatedAt: new Date() },
        { watchlistId: 1, movieId: 48, watchStatus: 'want', createdAt: new Date(), updatedAt: new Date() },
        { watchlistId: 1, movieId: 49, watchStatus: 'want', createdAt: new Date(), updatedAt: new Date() },
        { watchlistId: 2, movieId: 2, watchStatus: 'want', createdAt: new Date(), updatedAt: new Date() },
        { watchlistId: 2, movieId: 3, watchStatus: 'want', createdAt: new Date(), updatedAt: new Date() },
        { watchlistId: 2, movieId: 32, watchStatus: 'want', createdAt: new Date(), updatedAt: new Date() },
        { watchlistId: 2, movieId: 5, watchStatus: 'want', createdAt: new Date(), updatedAt: new Date() },
        { watchlistId: 2, movieId: 6, watchStatus: 'want', createdAt: new Date(), updatedAt: new Date() },
        { watchlistId: 3, movieId: 2, watchStatus: 'watched', createdAt: new Date(), updatedAt: new Date() },
        { watchlistId: 3, movieId: 3, watchStatus: 'watched', createdAt: new Date(), updatedAt: new Date() },
        { watchlistId: 4, movieId: 2, watchStatus: 'watched', createdAt: new Date(), updatedAt: new Date() },
        { watchlistId: 4, movieId: 3, watchStatus: 'watched', createdAt: new Date(), updatedAt: new Date() },
        { watchlistId: 4, movieId: 4, watchStatus: 'want', createdAt: new Date(), updatedAt: new Date() },
      ], {});
  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('WatchedMovies', null, {});
  }
};
