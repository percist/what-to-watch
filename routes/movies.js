const express = require('express');
const { check, validationResult } = require('express-validator')
const { asyncHandler, handleValidationErrors, csrfProtection } = require('../utils')
const router = express.Router();
const reviewsRouter = require('./reviews');
const { restoreUser } = require('../auth');

const db = require('../db/models');
const { getMaxListeners } = require('../app');
const watchedmovie = require('../db/models/watchedmovie');

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
  csrfProtection,
  restoreUser,
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

    if (isWatched) {
      // This is where we render our review page and pass in the movieId
      res.render('new-review', { movieId: movie.id, csrfToken: req.csrfToken(), user });
    } else {
      const validatorErrors = validationResult(req);
      let errors = [];
      errors.push('NOT ON YOUR LIFE')
      errors = validatorErrors.array().map((error) => error.msg)
      res.render('new-review', {
        movieId: movie.id, 
        csrfToken: req.csrfToken(), 
        user, 
        errors
      })
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
    poster: `https://image.tmdb.org/t/p/original${movie.posterPath}`,
    releaseDate: movie.releaseDate,
    runtime: movie.runtime,
    genres: movie.genres,
    overview: movie.overview,
    rating: movie.vote,
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


router.post(
  '/:id(\\d+)/want', 
  restoreUser, 
  asyncHandler(async (req, res) => {

  const movieId = parseInt(req.params.id, 10);
  const user = res.locals.user

  const userWatchlist = await db.Watchlist.findOne({
    where: {
      userId: user.id
    }
  })

  const movieWanted = await db.WatchedMovie.findOne({
    where: {
      movieId: movieId,
      watchlistId: userWatchlist.id
    }
  })

  if (movieWanted) {
    if (movieWanted.watchStatus === 'watched') {
      movieWanted.watchStatus = 'want';
      movieWanted.save();
      return res.redirect('/watchlists/want')
    }
  } else {
    const newWant = await db.WatchedMovie.create({
      watchlistId: userWatchlist.id,
      movieId: movieId,
      watchStatus: 'want',
    })

    return res.redirect('/watchlists/want')
  }
}))

router.post(
  '/:id(\\d+)/watched', 
  restoreUser, 
  asyncHandler(async (req, res) => {

  const movieId = parseInt(req.params.id, 10);
  const user = res.locals.user

  const movieWatched = await db.WatchedMovie.findOne({
    where: {
      movieId: movieId,
      watchlistId: user.id
    }
  })

  if (movieWatched) {
    if (movieWatched.watchStatus === 'want') {
      movieWatched.watchStatus = 'watched';
      await movieWatched.save();
      return res.redirect('/watchlists/watched')
    }
  }
  const newWatched = await db.WatchedMovie.create({
    watchlistId: user.id,
    movieId: movieId,
    watchStatus: 'watched',
  })

  return res.redirect('/watchlists/watched')

}))

router.get('/:id(\\d+)/status', restoreUser, asyncHandler(async (req, res) => {
  const movieId = parseInt(req.params.id, 10);
  const user = res.locals.user;
  const watchStatus = await db.WatchedMovie.findOne({
    where: {
      movieId,
      watchlistId: user.id,
    }
  });
  if (!watchStatus) return null

  if (watchStatus.watchStatus === 'want') {
    res.send(false);
  } else if (watchStatus.watchStatus === 'watched') {
    res.send(true);
  } else return null

}));



module.exports = router;
