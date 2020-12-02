'use strict';
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    stars: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    review: {
      allowNull: false,
      type: DataTypes.TEXT
    },
    userId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: { model: 'Users' }
    },
    movieId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: { model: 'Movies' }
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
  Review.associate = function(models) {
    Review.belongsTo(models.User, {foreignKey: 'userId'})
    Review.belongsTo(models.Movie, {foreignKey: 'movieId'})
  };
  return Review;
};