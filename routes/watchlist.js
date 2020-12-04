const express = require('express');
const { check, validationResult } = require('express-validator')
const { asyncHandler, handleValidationErrors, csrfProtection } = require('../utils')
const router = express.Router();

const db = require('../db/models');


// land on  users logged in page: 'Welcome to What to Watch! Get watching!'



// if watchlists are empty have a message saying "You don't have anything on your Watchlists :( Start browsing movies!"


//`https://image.tmdb.org/t/p/original/${movie.poster_path}`


router.get('/want', asyncHandler(async(req, res) => {
  const movies = await db.Movie.findAll({
    include: [{
      model: db.WatchedMovie,
      where: {
        userId: res.locals.userId,
        watchStatus: 'want'
      }
    }]
  });

  console.log(movies);  
  res.render('watchlist', {
    poster: `https://image.tmdb.org/t/p/original/${movie.posterPath}`,
    title: movie.title,
    rating: movie.stars,
    genres: movie.genres,
    watchStatus: movie.WatchedMovie.watchListId
  });

}));




router.get('/want', asyncHandler(async(req, res) => {

router.get('/', asyncHandler(async(req, res) => {
  // const moviesToWatch = await //get list of movies on watchlist
  res.render('watchlist', {title: 'Want to Watch'});
}));







module.exports = router;