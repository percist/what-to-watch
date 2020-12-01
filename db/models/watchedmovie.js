'use strict';
module.exports = (sequelize, DataTypes) => {
  const WatchedMovie = sequelize.define('WatchedMovie', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    watchListId: {
      allowNull: false,
      type: Sequelize.INTEGER,
      references: { model: 'Watchlists' }
    },
    movieId: {
      allowNull: false,
      type: Sequelize.INTEGER,
      references: { model: 'Movies' }
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE
    }
  }, {});
  WatchedMovie.associate = function(models) {
    // associations can be defined here

  };
  return WatchedMovie;
};