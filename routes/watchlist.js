const express = require('express');
const { check, validationResult } = require('express-validator')
const { asyncHandler, handleValidationErrors, csrfProtection } = require('../utils')
const router = express.Router();

const db = require('../db/models');


router.get('/want', asyncHandler(async(req, res) => {
  // const moviesToWatch = await //get list of movies on watchlist
  res.render('watchlist', {title: 'Want to Watch'});
}));







module.exports = router;