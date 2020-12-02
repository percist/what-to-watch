'use strict';
const bcrypt = require('bcrypt')


module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
        firstName: 'John', lastName: 'Johne', email: 'john@doe.com', hashedPassword: bcrypt.hashSync('P@ssw0rd', 10)
        , createdAt: new Date(), updatedAt: new Date()   
      }], {});
    
  },

  down: (queryInterface, Sequelize) => {
  return queryInterface.bulkDelete('Users', null, {});
  
  }
};
