const express = require('express');
const { check, validationResult } = require('express-validator')
const { asyncHandler, handleValidationErrors, csrfProtection } = require('../utils')
const router = express.Router();

const db = require('../db/models');
const { getMaxListeners } = require('../app');


// async function getAllMovies() {
//   const movies = await db.Movie.findAll({include: db.Genre});
// }

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
