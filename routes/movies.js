const express = require('express');
const { check, validationResult } = require('express-validator')
const { asyncHandler, handleValidationErrors, csrfProtection } = require('../utils')
const router = express.Router();

const db = require('../db/models');
const { getMaxListeners } = require('../app');


// async function getAllMovies() {
//   const movies = await db.Movie.findAll({include: db.Genre});
// }

router.get('/movies', asyncHandler(async (req, res) => {
  const movies = await db.Movie.findAll({
    include: db.Genre
  })
  res.render('movies', { title: 'Movies', movies });
}));






module.exports = router;
