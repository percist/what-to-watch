'use strict';
module.exports = (sequelize, DataTypes) => {
  const Movie = sequelize.define('Movie', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    title: {
      allowNull: false,
      type: DataTypes.STRING(255)
    },
    genreId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: { model: 'Genres' }
    },
    moviePoster: {
      type: DataTypes.STRING
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
  Movie.associate = function(models) {
    // associations can be defined here
    Movie.belongsTo(models.Genre, {foreignKey: 'genreId'});
    Movie.hasMany(models.Review, {foreignKey: 'movieId'});
    const columnMapping = {
      through: 'WatchedMovies', // This is the model name referencing the join table.
      otherKey: 'watchlistId',
      foreignKey: 'movieId'
    }
    Movie.belongsToMany(models.WatchList, columnMapping);
  };
  return Movie;
};