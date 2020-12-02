'use strict';
module.exports = (sequelize, DataTypes) => {
  const Watchlist = sequelize.define('Watchlist', {
    watchStatus: {
      allowNull: false,
      type: DataTypes.STRING(20)
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