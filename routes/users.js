var express = require('express');
var router = express.Router();

const db = require('../db/models');

const { csrfProtection, asyncHandler } = require('../utils');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/users/register', csrfProtection, asyncHandler(async(req, res) => {
  const user = db.User.build();
  res.render('sign-up', {
    user,
    csrfToken: req.csrfToken()
  });
}));



module.exports = router;
