'use strict';
const bcrypt = require('bcrypt');

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Users', [    
      {firstName: 'John', lastName: 'Johne', email: 'john@doe.com', hashedPassword: bcrypt.hashSync('P@ssw0rd', 10)},  
      {firstName: 'Jon', lastName: 'Johne', email: 'jon@doe.com', hashedPassword: bcrypt.hashSync('P@ssw0rd', 10)},  
      {firstName: 'Jean', lastName: 'Valjean', email: 'jean@doe.com', hashedPassword: bcrypt.hashSync('P@ssw0rd', 10)},  
      {firstName: 'Jonathan', lastName: 'Johns', email: 'jonathan@doe.com', hashedPassword: bcrypt.hashSync('P@ssw0rd', 10)},  
      {firstName: 'Geon', lastName: 'Johnson', email: 'geon@doe.com', hashedPassword: bcrypt.hashSync('P@ssw0rd', 10)}  
    ], {});

  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Users', null, {});
  }
};
