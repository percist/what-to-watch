var express = require('express');
var router = express.Router();
const { loginUser, logoutUser, restoreUser } = require('../auth');
const { asyncHandler, handleValidationErrors, csrfProtection} = require('../utils')
const db = require('../db/models');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'What to Watch' });
});

router.post('/logout', (req, res) => {
  logoutUser(req, res);
  res.render('index', { title: 'What to Watch' });
});

module.exports = router;
