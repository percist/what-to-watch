'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Movies', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        allowNull: false,
        type: Sequelize.STRING(255)
      },
      posterPath: {
        type: Sequelize.STRING,
      },
      tmdbId: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      genres: {
        type: Sequelize.STRING(50),
        allowNull: false
      },
      overview: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      vote: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      releaseDate: {
        type: Sequelize.STRING,
        allowNull: false
      },
      runtime: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      createdAt: {
        type: Sequelize.DATE
      },
      updatedAt: {
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Movies');
  }
};