const express = require('express');
const router = express.Router();
const { asyncHandler } = require('../utils');
const db = require('../db/models');

//buttons in public/js will send post/patch requests
router.get('/', function(req, res, next) {
    res.json({message: 'hello'});
    // CRUD functions go here
  });



router.put("/want", asyncHandler(async(req, res) => {

  const {status} = req.body
  console.log(status);

  // const watched = await db.WatchedMovie.findBy



}))
















//THIS IS A TEST
router.get('/watched', asyncHandler(async (req, res) => {
  const object = {
    include: [{
      model: db.Watchlist,
      where: {
        userId: 1,
      },
      through: {
        where: {
          watchStatus: 'want'
        }
      }
    }]
  }
  const movies = await db.Movie.findAll(object);
  const movie = movies[0];
  const movieId = movie.id;
  const watchlist = await db.Watchlist.findAll({
    where: { userId: 1 }
  })
  // console.log(watchlist[0].userId);
  const specific = watchlist[0].id;
  const status = await db.WatchedMovie.findAll({
    where: { watchListId: specific }
  });

  let watchStatusUpdate = status[0].watchStatus;
  // watchStatusUpdate = 'watched';
  // console.log(watchStatusUpdate + '*******************************');

  res.json(watchStatusUpdate);
}));


router.patch('/api/want', asyncHandler(async (req, res) => {
  const object = {
    include: [{
      model: db.Watchlist,
      where: {
        userId: 1,
      },
      through: {
        where: {
          watchStatus: 'want'
        }
      }
    }]
  }
  const movies = await db.Movie.findAll(object);
  const movie = movies[0];
  const movieId = movie.id;
  const watchlist = await db.Watchlist.findAll({
    where: { userId: 1 }
  })
  // console.log(watchlist[0].userId);
  const specific = watchlist[0].id;
  const status = await db.WatchedMovie.findAll({
    where: { watchListId: specific }
  });

  let watchStatusUpdate = status[0].watchStatus;
  // watchStatusUpdate = 'watched';
  // console.log(watchStatusUpdate + '*******************************');

  await watchStatusUpdate.update('watched')
  res.json(watchStatusUpdate);

}))



  
  module.exports = router;