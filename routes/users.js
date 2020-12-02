const express = require('express');
const { check } = require('express-validator')
const { loginUser, restoreUser } = require('../auth');
const { asyncHandler, handleValidationErrors, csrfProtection} = require('../utils')
const router = express.Router();

const db = require('../db/models');
const { User } = db;

const validateEmailAndPassword = [
  check('emailAddress')
    .exists({checkFalsy: true})
    .withMessage('Please provide a value for Email Address')
    .isLength({max: 255})
    .withMessage('Email Address must not be more than 255 characters')
    .isEmail()
    .withMessage('Email Address is not a valid email')
    .custom((value) => {
      return db.User.findOne({ where: { emailAddress: value } })
        .then((user) => {
          if (user) {
            return Promise.reject('The provided email address is already in use')
          }
        })
    }),
  check('password')
    .exists({checkFalsy: true})
    .withMessage('Please provide a value for Password')
    .isLength({max: 50})
    .withMessage('Password must not be more than 50 characters long')
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/, 'g')
    .withMessage('Password must contain at least 1 lowercase letter, uppercase letter, number, and special character'),
  check('confirmPassword')
    .exists({checkFalsy: true})
    .withMessage('Please provide a value for Confirm Password')
    .isLength({max: 50})
    .withMessage('Confirm Password must not be more than 50 characters long')
    .custom((value, { req }) => {
      if (value !== req.body.password) {
        throw new Error('Confirm Password does not match Password');
      }
      return true;
    })
];







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
