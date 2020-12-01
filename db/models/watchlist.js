'use strict';
module.exports = (sequelize, DataTypes) => {
  const Watchlist = sequelize.define('Watchlist', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    watchStatus: {
      allowNull: false,
      type: Sequelize.STRING(20)
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
  Watchlist.associate = function(models) {
    const columnMapping = {
      through: 'WatchMovies', // This is the model name referencing the join table.
      otherKey: 'movieId',
      foreignKey: 'watchlistId'
    }

    Watchlist.belongsToMany(models.Movie, columnMapping);
  };
  return Watchlist;
};