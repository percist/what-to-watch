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
  const reviews = await db.Reviews.findall({
    where: {
      movieId
    }
  })

  res.render('movie-results', { 
    reviews,
    title: movie.title, 
    poster: `https://image.tmdb.org/t/p/original/${movie.poster_path}`,
    releaseDate: movie.release_date,
    runtime: movie.runtime,
    genres: movie.genres,
    overview: movie.overview  
  })
}));

// router.get(
//   "/:id(\\d+)",
//   asyncHandler(async (req, res, next) => {
//       const taskId = parseInt(req.params.id, 10);
//       const task = await Task.findByPk(taskId);

//       if (task) {
//           res.json({ task });
//       }else {
//           next(taskNotFoundError(taskId));
//       }
//   })
// );




module.exports = router;
