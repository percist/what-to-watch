'use strict';
module.exports = (sequelize, DataTypes) => {
  const Movie = sequelize.define('Movie', {
    title: {
      allowNull: false,
      type: DataTypes.STRING(255)
    },
    genreId: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    watchStatus: {
      allowNull: false,
      type: DataTypes.STRING(20)
    },
    moviePoster: {
      type: DataTypes.STRING
    }
  }, {});
  Movie.associate = function(models) {
    // associations can be defined here
    Movie.belongsTo(models.Genre, {foreignKey: 'genreId'});
    Movie.hasMany(models.Review, {foreignKey: 'movieId'});
    const columnMapping = {
      through: 'WatchedMovies', // This is the model name referencing the join table.
      otherKey: 'watchlistId',
      foreignKey: 'movieId'
    }
    Movie.belongsToMany(models.Watchlist, columnMapping);
  };
  return Movie;
};