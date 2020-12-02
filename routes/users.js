const express = require('express');
const { check } = require('express-validator')
const { loginUser, restoreUser } = require('../auth');
const { asyncHandler, handleValidationErrors, csrfProtection} = require('../utils')
const router = express.Router();

const db = require('../db/models');
const { User, watchList, Movie, Genre,  } = db;

const validateEmailAndPassword = [
  check('email').exists({ checkFalsy: true }).isEmail().withMessage('Please provide a valid email.'),
  check('password').exists({ checkFalsy: true }).withMessage('Please provide a password.'),
  handleValidationErrors,
];







/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

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
