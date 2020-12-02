'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: {
      allowNull: false,
      type: DataTypes.STRING(200)
    },
    email: {
      allowNull: false,
      unique: true,
      type: DataTypes.STRING(200)
    },
    hashedPassword: {
      allowNull: false,
      type: DataTypes.STRING.BINARY
    },
    watchListId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: { model: 'Watchlists' }
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
  User.associate = function(models) {
    // associations can be defined here
    User.hasOne(models.Watchlist, { foreignKey: 'watchListId'});
    User.hasMany(models.Review, { foreignKey: 'userId' });
  };
  return User;
};