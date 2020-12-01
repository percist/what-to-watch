'use strict';
module.exports = (sequelize, DataTypes) => {
  const Watchlist = sequelize.define('Watchlist', {
    watchStatus: DataTypes.STRING
  }, {});
  Watchlist.associate = function(models) {
    // associations can be defined here
  };
  return Watchlist;
};