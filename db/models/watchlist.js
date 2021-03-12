'use strict';
module.exports = (sequelize, DataTypes) => {
  const Watchlist = sequelize.define('Watchlist', {
    userId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: { model: 'Users'}
    },
  }, {});
  Watchlist.associate = function(models) {
    const columnMapping = {
      foreignKey: 'watchlistId',
      through: 'WatchedMovies', // This is the model name referencing the join table.
      otherKey: 'movieId',
    }

    Watchlist.belongsToMany(models.Movie, columnMapping);
    Watchlist.belongsTo(models.User, { foreignKey: 'userId'});
  };
  return Watchlist;
};