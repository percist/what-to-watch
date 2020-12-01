'use strict';
module.exports = (sequelize, DataTypes) => {
  const Movie = sequelize.define('Movie', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    title: {
      allowNull: false,
      type: Sequelize.STRING(255)
    },
    genreId: {
      allowNull: false,
      type: Sequelize.INTEGER,
      references: { model: 'Genres' }
    },
    moviePoster: {
      type: Sequelize.STRING
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