const express = require('express');
const router = express.Router();
const { asyncHandler } = require('../utils');
const db = require('../db/models');
const { restoreUser, logoutUser } = require('../auth');


router.put('/want', restoreUser, asyncHandler(async (req, res) => {
  console.log('********* THIS IS WANTING TO WATCH SOMETHING')
  // console.log(req.data)
  const data = await res.json()
  // const {
  //   userId,
  //   movieId,
  // } = data

  console.log(data);

  // const watchedMovie = await db.WatchedMovie.create({
  //   watchlistId: userId.id,
  //   movieId,
  //   watchStatus: 'want'
  // });
  
}));


router.delete('/logout', (req, res) => {
  logoutUser(req, res);
  res.render('login', { title: 'What to Watch' });
});



module.exports = router;