const express = require('express');
const { check, validationResult } = require('express-validator')
const { asyncHandler, handleValidationErrors, csrfProtection } = require('../utils')
const router = express.Router();
const reviewsRouter = require('./reviews');
const { restoreUser } = require('../auth');

const db = require('../db/models');
const { getMaxListeners } = require('../app');
const watchedmovie = require('../db/models/watchedmovie');


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
  '/:id(\\d+)/reviews/new', csrfProtection, restoreUser,
  asyncHandler(async (req, res, next) => {
    const movie = await db.Movie.findOne({
      where: {
        id: req.params.id,
      },
    });
    const user = res.locals.user;

    const object = {
      include: [{
        model: db.Watchlist,
        where: {
          userId: user.id,
        },
        through: {
          where: {
            watchStatus: 'watched'
          }
        }
      }]
    }
    const watchedMovies = await db.Movie.findAll(object);
    // Iterate through the watchedMovies array and check each watchedMovies id key to see
    // if it's the same as movie.id

    const isWatched = watchedMovies.find(watchedMovie => watchedMovie.dataValues.id === movie.id);

    // TODO movie.foreignKeys to connect user to movie
    if (isWatched) {
      // This is where we render our review page and pass in the movieId
      res.render('new-review', { movieId: movie.id, csrfToken: req.csrfToken(), user });
    } else {
      // const err = new Error('Unauthorized');
      // err.status = 401;
      // err.message = 'You are not authorized to review this movie.';
      // err.title = 'Unauthorized';
      // throw err;

      const validatorErrors = validationResult(req);
      let errors = [];
      errors.push('NOT ON YOUR LIFE')
      errors = validatorErrors.array().map((error) => error.msg)
      res.render('new-review', {
        movieId: movie.id, csrfToken: req.csrfToken(), user, errors})
    }
  })
);

router.get('/:id(\\d+)', restoreUser, asyncHandler(async (req, res) => {

  const movieId = parseInt(req.params.id, 10);
  const movie = await db.Movie.findByPk(movieId)
  const reviews = await db.Review.findAll({
    where: {
      movieId
    }
  })
  const user = res.locals.user;

  res.render('movie', {
    movieId: movie.id,
    reviews,
    title: movie.title,
    tagline: movie.tagline,
    poster: `https://image.tmdb.org/t/p/original${movie.posterPath}`,
    releaseDate: movie.releaseDate,
    runtime: movie.runtime,
    genres: movie.genres,
    overview: movie.overview,
    vote: movie.vote,
    user
  })
}));

router.post('/:id(\\d+)/reviews/new', csrfProtection, restoreUser, asyncHandler(async (req, res) => {
 
  const review = req.body.movieReview;
  const stars = parseInt(req.body.rating, 10);
  const userId = req.session.auth.userId;
  const movieId = parseInt(req.params.id, 10);
  
  await db.Review.create({
    stars,
    review,
    userId,
    movieId
  });
  const user = res.locals.user;
  // const validatorErrors = validationResult(req);

  // if (validatorErrors.isEmpty()) {
  //   await bookToUpdate.update(book);
  //   res.redirect('/');
  // } else {
  //   const errors = validatorErrors.array().map((error) => error.msg);
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
    overview: movie.overview,
    csrfToken: req.csrfToken(),
    user
  });
}));



module.exports = router;
