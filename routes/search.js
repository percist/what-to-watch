const express = require('express');
const router = express.Router();
const { asyncHandler } = require('../utils');
const { restoreUser } = require('../auth')
const db = require('../db/models');

router.get('/alpha-order', restoreUser, asyncHandler(async(req, res) => {
    const movies = await db.Movie.findAll({
        order: [
            ['title']
        ]
    });
  const user = res.locals.user;
    res.render('watchlist', {
      movies,
      user,
      listing: "Alphabetical Order"
    });
  
  }));

router.get('/released', restoreUser, asyncHandler(async(req, res) => {
    const movies = await db.Movie.findAll({
        order: [
            ['releaseDate', 'DESC']
        ],
  
    });
  const user = res.locals.user;
    res.render('watchlist', {
      movies,
      user,
      listing: "Date Released"
    });
  }));

router.get('/random', restoreUser, asyncHandler(async(req, res) => {
  const random = Math.floor((Math.random() * 50) + 1);
  const movies = [];
  movies.push(await db.Movie.findByPk(random))
  const user = res.locals.user;
    res.render('watchlist', {
      movies,
      user,
      listing: "Here's a Random Pick!"
    });

  }));














module.exports = router