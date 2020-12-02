'use strict';
module.exports = (sequelize, DataTypes) => {
  const Genre = sequelize.define('Genre', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    genre: {
      unique: true,
      allowNull: false,
      type: DataTypes.STRING(50)
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
  Genre.associate = function(models) {
    Genre.hasMany(models.Movie, {foreignKey: 'genreId'});
  };
  return Genre;
};