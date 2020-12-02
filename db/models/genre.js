'use strict';
module.exports = (sequelize, DataTypes) => {
  const Genre = sequelize.define('Genre', {
    name: {
      unique: true,
      allowNull: false,
      type: DataTypes.STRING(50)
    }
  
  }, {});
  Genre.associate = function(models) {
    Genre.hasMany(models.Movie, {foreignKey: 'genreId'});
  };
  return Genre;
};