'use strict';
module.exports = (sequelize, DataTypes) => {
  const WatchedMovie = sequelize.define('WatchedMovie', {
    watchListId: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    movieId: {
      allowNull: false,
      type: DataTypes.INTEGER
    }
  }, {});
  WatchedMovie.associate = function(models) {
    
    WatchedMovie.belongsTo(models.Watchlist, {foreignKey: 'watchlistId'});
    WatchedMovie.belongsTo(models.Movie, {foreignKey: 'movieId'});

  };
  return WatchedMovie;
};