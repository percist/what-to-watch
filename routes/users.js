var express = require('express');
var router = express.Router();

const db = require('../db/models');

const { csrfProtection, asyncHandler } = require('../utils');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/', asyncHandler(async(req, res) => {
  res.render('index');
}));

router.get('/users/register', csrfProtection, asyncHandler(async(req, res) => {
  const user = db.User.build();
  res.render('user-register', {
    user,
    csrfToken: req.csrfToken()
  });
}));

router.post('/users/register', csrfProtection, asyncHandler(async(req, res) => {
  const {
    name,
    email,
    password
  } = req.body;

  const user = db.User.build({
    name,
    email
  });
}));

router.get('/user/login', csrfProtection, (req, res) => {
  res.render('user-login', {
    title: 'Login',
    csrfToken: req.csrfToken()
  })
});

router.post('/user/login', csrfProtection, asyncHandler(async (req, res) => {
  const {
    email,
    password
  } = req.body;
}));



module.exports = router;
