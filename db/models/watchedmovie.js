'use strict';
module.exports = (sequelize, DataTypes) => {
  const WatchedMovie = sequelize.define('WatchedMovie', {
    watchlistId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: { model: 'Watchlist', key: 'watchlistId' }
    },
    movieId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: { model: 'Movie', key: 'movieId' }
    },
    watchStatus: {
      allowNull: false,
      type: DataTypes.STRING
    }
  }, {});
  WatchedMovie.associate = function(models) {
    
    WatchedMovie.belongsTo(models.Watchlist, {foreignKey: 'watchlistId'});
    WatchedMovie.belongsTo(models.Movie, {foreignKey: 'movieId'});

  };
  return WatchedMovie;
};