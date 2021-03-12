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
      tag: {
        type: Sequelize.STRING(200),
        allowNull:true
      },
      genres: {
        type: Sequelize.STRING(50),
        allowNull: true
      },
      overview: {
        type: Sequelize.TEXT,
        allowNull: true
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
      vote: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      createdAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now'),
      },
      updatedAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now'),
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Movies');
  }
};