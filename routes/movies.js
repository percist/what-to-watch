const express = require('express');
const { check, validationResult } = require('express-validator')
const { asyncHandler, handleValidationErrors, csrfProtection } = require('../utils')
const router = express.Router();
const reviewsRouter = require('./reviews');

const db = require('../db/models');
const { getMaxListeners } = require('../app');


// async function getAllMovies() {
//   const movies = await db.Movie.findAll({include: db.Genre});
// }

const movieNotFoundError = (id) => {
  const err = Error('Movie not found');
  err.errors = [`Movie with id of ${id} could not be found.`];
  err.title = 'Movie not found.';
  err.status = 404;
  return err;
};

router.use('/movies/reviews', reviewsRouter);

router.get(
  '/:id(\\d+)/reviews/new',
  asyncHandler(async (req, res, next) => {
    const movie = await db.Movie.findOne({
      where: {
        id: req.params.id,
      },
    });
  
    const user = res.locals.user.id;
    // TODO movie.foreignKeys to connect user to movie
    if (user !== movie.) {
      const err = new Error('Unauthorized');
      err.status = 401;
      err.message = 'You are not authorized to review this movie.';
      err.title = 'Unauthorized';
      throw err;
    }
    if (movie) {
      // This is where we render our review page and pass in the movieId
      res.render('new-review', {movieId: movie.id});
    }
  })
);

router.get('/:id(\\d+)', asyncHandler(async (req, res) => {

  const movieId = parseInt(req.params.id, 10);
  const movie = await db.Movie.findByPk(movieId)
  const reviews = await db.Review.findAll({
    where: {
      movieId
    }
  })

  res.render('movie', { 
    movieId: movie.id,
    reviews,
    title: movie.title, 
    poster: `https://image.tmdb.org/t/p/original${movie.posterPath}`,
    releaseDate: movie.releaseDate,
    runtime: movie.runtime,
    genres: movie.genres,
    overview: movie.overview  
  })
}));

router.post('/review', (req, res) => {
  
});



module.exports = router;
