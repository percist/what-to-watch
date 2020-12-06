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

router.get('/released', asyncHandler(async(req, res) => {
    const movies = await db.Movie.findAll({
        order: [
            ['releaseDate', 'DESC']
        ],
        limit: 10
    });
    res.render('watchlist', {
      movies,
    });
  }));

router.get('/random', asyncHandler(async(req, res) => {
  const random = Math.floor((Math.random() * 200) + 1);
  const movies = [];
  movies.push(await db.Movie.findByPk(random))
    res.render('watchlist', {
      movies,
    })
    console.log(movies);
  }));















module.exports = router