'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   
      return queryInterface.bulkInsert('Movies', [
        {
          title: 'The Cuckoo',
          posterPath: '/jz5u5anVn3PTAjHC1nQehZGQ41C.jpg',
          tmdbId: 554,
          genres: 'Drama',
          overview: "September of 1944, a few days before Finland went out of the Second World War. A chained to a rock Finnish sniper-kamikadze Veikko managed to set himself free. Ivan, a captain of the Soviet Army, arrested by the Front Secret Police 'Smersh', has a narrow escape. They are soldiers of the two enemy armies. A Lapp woman Anni gives a shelter to both of them at her farm. For Anni they are not enemies, but just men.",
          releaseDate: '2002-01-01',
          runtime: 100
        }
      ], {});
   
  },

  down: (queryInterface, Sequelize) => {
   
      return queryInterface.bulkDelete('Movies', null, {});
 
  }
};