const express = require('express');
const router = express.Router();
const { asyncHandler } = require('../utils');
const db = require('../db/models');
const { restoreUser, logoutUser } = require('../auth');


router.put('/want', restoreUser, asyncHandler(async (req, res) => {
  console.log('********* THIS IS WANTING TO WATCH SOMETHING')
  // console.log(req.data)
  const data = await res.json()
  // const {
  //   userId,
  //   movieId,
  // } = data

  console.log(data);

  // const watchedMovie = await db.WatchedMovie.create({
  //   watchlistId: userId.id,
  //   movieId,
  //   watchStatus: 'want'
  // });
  
}));

router.put('/watched', restoreUser, asyncHandler(async (req, res) => {
  console.log('********* THIS IS WATCHING SOMETHING')
}));

router.delete('/want', restoreUser, asyncHandler(async (req, res) => {
  console.log('********* THIS IS DELETING SOMETHING')
}));




// router.get('/', function (req, res, next) {
//   res.render('index', { title: 'What to Watch' });
// });

router.delete('/logout', (req, res) => {
  logoutUser(req, res);
  res.render('login', { title: 'What to Watch' });
});


// router.delete('/logout', restoreUser, (req, res) => {
//   console.log(req.session.user);
//   delete req.session.user;
//   console.log('!!!!!!!!!!!!!!!!!!!!!');
//   console.log(req.session.user);
// });

// we moved these two routes from the index.js file
// want to fetch this logout route and render the login page once the button is clicked








// //buttons in public/js will send post/patch requests
// router.get('/', function(req, res, next) {
//     res.json({message: 'hello'});
//     // CRUD functions go here
//   });



// router.put("/want", restoreUser, asyncHandler(async(req, res) => {

//   // const object = {
//   //   include: [{
//   //     model: db.Watchlist,
//   //     where: {
//   //       userId: user.id,
//   //     },
//   //     through: {
//   //       where: {
//   //         watchStatus: 'watched'
//   //       }
//   //     }
//   //   }]
//   // }

//   const {status} = req.body
//   // const stringify = JSON.stringify(status)
//   console.log(`${req.body.data}!!!!!!!!!!!!!!!!!!!`);
//   const userId = req.session.auth.userId;

//   const watched = await db.WatchedMovie.findByPk()

// }));
















// //THIS IS A TEST
// router.get('/watched', asyncHandler(async (req, res) => {
//   const object = {
//     include: [{
//       model: db.Watchlist,
//       where: {
//         userId: 1,
//       },
//       through: {
//         where: {
//           watchStatus: 'want'
//         }
//       }
//     }]
//   }
//   const movies = await db.Movie.findAll(object);
//   const movie = movies[0];
//   const movieId = movie.id;
//   const watchlist = await db.Watchlist.findAll({
//     where: { userId: 1 }
//   })
//   // console.log(watchlist[0].userId);
//   const specific = watchlist[0].id;
//   const status = await db.WatchedMovie.findAll({
//     where: { watchListId: specific }
//   });

//   let watchStatusUpdate = status[0].watchStatus;
//   // watchStatusUpdate = 'watched';
//   // console.log(watchStatusUpdate + '*******************************');

//   res.json(watchStatusUpdate);
// }));


// router.patch('/api/want', asyncHandler(async (req, res) => {
//   const object = {
//     include: [{
//       model: db.Watchlist,
//       where: {
//         userId: 1,
//       },
//       through: {
//         where: {
//           watchStatus: 'want'
//         }
//       }
//     }]
//   }
//   const movies = await db.Movie.findAll(object);
//   const movie = movies[0];
//   const movieId = movie.id;
//   const watchlist = await db.Watchlist.findAll({
//     where: { userId: 1 }
//   })
//   // console.log(watchlist[0].userId);
//   const specific = watchlist[0].id;
//   const status = await db.WatchedMovie.findAll({
//     where: { watchListId: specific }
//   });

//   let watchStatusUpdate = status[0].watchStatus;
//   // watchStatusUpdate = 'watched';
//   // console.log(watchStatusUpdate + '*******************************');

//   await watchStatusUpdate.update('watched')
//   res.json(watchStatusUpdate);

// }))




module.exports = router;