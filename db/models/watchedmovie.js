'use strict';
module.exports = (sequelize, DataTypes) => {
  const WatchedMovie = sequelize.define('WatchedMovie', {
    watchListId: DataTypes.INTEGER,
    movieId: DataTypes.INTEGER
  }, {});
  WatchedMovie.associate = function(models) {
    // associations can be defined here
  };
  return WatchedMovie;
};