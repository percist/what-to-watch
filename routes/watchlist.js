const express = require('express');
const { check, validationResult } = require('express-validator');
const { asyncHandler, handleValidationErrors, csrfProtection } = require('../utils');
const router = express.Router();
const { restoreUser } = require('../auth')

const db = require('../db/models');


// TODO land on  users logged in page: 'Welcome to What to Watch! Get watching!'

// TODO if watchlists are empty have a message saying "You don't have anything on your Watchlists :( Start browsing movies!"


// User Clicks on 'Want to Watch' and a table containing their movies is returned
router.get('/want', restoreUser, asyncHandler(async (req, res) => {
  const user = res.locals.user
  const object = {
    include: [{
      model: db.Watchlist,
      where: {
        userId: user.id,
      },
      through: {
        where: {
          watchStatus: 'want'
        }
      }
    }]
  }
  const movies = await db.Movie.findAll(object);
  console.log(user)
  res.render('watchlist', {
    movies,
    user
  });

}));

// User clicks on 'Watched' and a table containing their watched movies is returned
router.get('/watched', restoreUser, asyncHandler(async (req, res) => {
  const user = res.locals.user
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
  const movies = await db.Movie.findAll(object);
  res.render('watchlist', {
    movies,
    user
  });

}));


router.get('/my-movies', restoreUser, asyncHandler(async (req, res) => {
  const user = res.locals.user
  const object = {
    include: [{
      model: db.Watchlist,
      where: {
        userId: user.id,
      },
      through: {
        where: {
          // watchStatus: 'watched'
        }
      }
    }]
  }
  const movies = await db.Movie.findAll(object);
  res.render('my-movies', {
    movies,
    user
  });

}));
















module.exports = router;