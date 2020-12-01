'use strict';
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    stars: {
      allowNull: false,
      type: Sequelize.INTEGER
    },
    review: {
      allowNull: false,
      type: Sequelize.TEXT
    },
    userId: {
      allowNull: false,
      type: Sequelize.INTEGER,
      references: { model: 'Users' }
    },
    movieId: {
      allowNull: false,
      type: Sequelize.INTEGER,
      references: { model: 'Movies' }
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
  Review.associate = function(models) {
    Review.belongsTo(models.User, {foreignKey: 'userId'})
    Review.belongsTo(models.Movie, {foreignKey: 'movieId'})
  };
  return Review;
};