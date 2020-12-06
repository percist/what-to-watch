'use strict';
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    stars: {
      type: DataTypes.INTEGER
    },
    review: {
      type: DataTypes.TEXT
    },
    userId: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    movieId: {
      allowNull: false,
      type: DataTypes.INTEGER
    }
  }, {});
  Review.associate = function(models) {
    Review.belongsTo(models.User, {foreignKey: 'userId'})
    Review.belongsTo(models.Movie, {foreignKey: 'movieId'})
  };
  return Review;
};