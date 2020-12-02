'use strict';
module.exports = (sequelize, DataTypes) => {
  const WatchedMovie = sequelize.define('WatchedMovie', {
    watchListId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: { model: 'Watchlists' }
    },
    movieId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: { model: 'Movies' }
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE
    }
  }, {});
  WatchedMovie.associate = function(models) {
    WatchedMovie.belongsTo(models.Watchlist, {foreignKey: 'watchlistId'});
    WatchedMovie.belongsTo(models.Movie, {foreignKey: 'movieId'});

  };
  return WatchedMovie;
};