'use strict';
module.exports = (sequelize, DataTypes) => {
  const Movie = sequelize.define('Movie', {
    title: {
      allowNull: false,
      type: DataTypes.STRING(255)
    },
    posterPath: {
      type: DataTypes.STRING,
    },
    tmdbId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    genres: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    overview: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    vote: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    releaseDate: {
      type: DataTypes.STRING(25),
      allowNull: false
    },
    runtime: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    vote: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    createdAt: {
      type: DataTypes.DATE
    },
    updatedAt: {
      type: DataTypes.DATE
    }
  }, {});
  Movie.associate = function(models) {
    // associations can be defined here
    Movie.hasMany(models.Review, {foreignKey: 'movieId'});
    const columnMapping = {
      through: models.WatchedMovie, // This is the model name referencing the join table.
      otherKey: 'watchlistId',
      foreignKey: 'movieId'
    }
    Movie.belongsToMany(models.Watchlist, columnMapping);
  };
  return Movie;
};