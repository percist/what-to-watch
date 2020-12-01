'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    email: {
      allowNull: false,
      unique: true,
      type: Sequelize.STRING(200)
    },
    hashedPassword: {
      allowNull: false,
      type: Sequelize.STRING.BINARY
    },
    watchedListId: {
      allowNull: false,
      type: Sequelize.INTEGER,
      references: { models: 'Watchlists' }
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
  User.associate = function(models) {
    // associations can be defined here
    User.hasOne(models.Watchlist, { foreignKey: 'watchListId'});
    User.hasMany(models.Review, { foreignKey: 'userId' });
  };
  return User;
};