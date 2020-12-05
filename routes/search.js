const express = require('express');
const router = express.Router();
const { asyncHandler } = require('../utils');
const db = require('../db/models');

router.get('/alpha-order', asyncHandler(async(req, res) => {
    const movies = await db.Movie.findAll({
        order: [
            ['title']
        ]
    });
    res.render('watchlist', {
      movies,
    });
  
  }));

router.get('/alpha-order', asyncHandler(async(req, res) => {
    const movies = await db.Movie.findAll({
        order: [
            ['title']
        ]
    });
    res.render('watchlist', {
      movies,
    });
  
  }));















module.exports = router