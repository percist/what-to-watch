'use strict';
module.exports = (sequelize, DataTypes) => {
  const Watchlist = sequelize.define('Watchlist', {
   
  }, {});
  Watchlist.associate = function(models) {
    const columnMapping = {
      through: 'WatchedMovies', // This is the model name referencing the join table.
      otherKey: 'movieId',
      foreignKey: 'watchlistId'
    }

    Watchlist.belongsToMany(models.Movie, columnMapping);
  };
  return Watchlist;
};