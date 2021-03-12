'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('WatchedMovies', [
        { watchlistId: 1, movieId: 78, watchStatus: 'watched', createdAt: new Date(), updatedAt: new Date() },
        { watchlistId: 1, movieId: 66, watchStatus: 'want', createdAt: new Date(), updatedAt: new Date() },
        { watchlistId: 1, movieId: 49, watchStatus: 'want', createdAt: new Date(), updatedAt: new Date() },
        { watchlistId: 1, movieId: 66, watchStatus: 'want', createdAt: new Date(), updatedAt: new Date() },
        { watchlistId: 1, movieId: 48, watchStatus: 'want', createdAt: new Date(), updatedAt: new Date() },
        { watchlistId: 1, movieId: 69, watchStatus: 'want', createdAt: new Date(), updatedAt: new Date() },
        { watchlistId: 1, movieId: 45, watchStatus: 'watched', createdAt: new Date(), updatedAt: new Date() },
        { watchlistId: 1, movieId: 27, watchStatus: 'watched', createdAt: new Date(), updatedAt: new Date() },
        { watchlistId: 1, movieId: 33, watchStatus: 'watched', createdAt: new Date(), updatedAt: new Date() },
        { watchlistId: 1, movieId: 49, watchStatus: 'watched', createdAt: new Date(), updatedAt: new Date() },
        { watchlistId: 1, movieId: 46, watchStatus: 'watched', createdAt: new Date(), updatedAt: new Date() },
        { watchlistId: 2, movieId: 33, watchStatus: 'want', createdAt: new Date(), updatedAt: new Date() },
        { watchlistId: 2, movieId: 47, watchStatus: 'want', createdAt: new Date(), updatedAt: new Date() },
        { watchlistId: 2, movieId: 25, watchStatus: 'want', createdAt: new Date(), updatedAt: new Date() },
        { watchlistId: 2, movieId: 30, watchStatus: 'want', createdAt: new Date(), updatedAt: new Date() },
        { watchlistId: 2, movieId: 66, watchStatus: 'want', createdAt: new Date(), updatedAt: new Date() },
        { watchlistId: 3, movieId: 27, watchStatus: 'watched', createdAt: new Date(), updatedAt: new Date() },
        { watchlistId: 4, movieId: 44, watchStatus: 'want', createdAt: new Date(), updatedAt: new Date() },
        { watchlistId: 4, movieId: 27, watchStatus: 'watched', createdAt: new Date(), updatedAt: new Date() },
        { watchlistId: 4, movieId: 33, watchStatus: 'watched', createdAt: new Date(), updatedAt: new Date() },
        { watchlistId: 4, movieId: 33, watchStatus: 'watched', createdAt: new Date(), updatedAt: new Date() },
        { watchlistId: 3, movieId: 33, watchStatus: 'watched', createdAt: new Date(), updatedAt: new Date() },
        { watchlistId: 1, movieId: 33, watchStatus: 'watched', createdAt: new Date(), updatedAt: new Date() }, 
      ], {});
  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('WatchedMovies', null, {});
  }
};
