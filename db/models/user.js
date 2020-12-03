'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstName: {
      allowNull: false,
      type: DataTypes.STRING(200)
    },
    lastName: {
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
    // watchListId: {
    //   type: DataTypes.INTEGER
    // }
  }, {});
  User.associate = function(models) {
    // associations can be defined here
    User.hasOne(models.Watchlist, { foreignKey: 'watchListId'});
    User.hasMany(models.Review, { foreignKey: 'userId' });
  };
  return User;
};