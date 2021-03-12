const express = require('express');
const router = express.Router();
const { asyncHandler } = require('../utils');
const db = require('../db/models');
const { restoreUser, logoutUser } = require('../auth');

router.delete('/logout', (req, res) => {
  logoutUser(req, res);
  res.render('login', { title: 'What to Watch' });
});



module.exports = router;