const express = require('express');
const { check, validationResult } = require('express-validator')
const { loginUser, logoutUser, restoreUser } = require('../auth');
const { asyncHandler, handleValidationErrors, csrfProtection} = require('../utils')
const bcrypt = require('bcrypt')
const router = express.Router();

const db = require('../db/models');
const { User } = db;

const validateEmailAndPassword = [
  check('email')
    .exists({checkFalsy: true})
    .withMessage('Please provide a value for Email Address')
    .isLength({max: 255})
    .withMessage('Email Address must not be more than 255 characters')
    .isEmail()
    .withMessage('Email Address is not a valid email')
    .custom((value) => {
      return db.User.findOne({ where: { email: value } })
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

const validateEmailAndPasswordForLogin = [
  check('email')
    .exists({ checkFalsy: true })
    .isEmail()
    .withMessage('Please provide a valid email.'),
  check('password')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a password.'),
  // handleValidationErrors,
];

// Render index
router.get('/', asyncHandler(async(req, res) => {
  res.render('user');
}));

// render register page
router.get('/register', csrfProtection, asyncHandler(async(req, res) => {
  const user = db.User.build();
  res.render('register', {
    user,
    csrfToken: req.csrfToken()
  });
}));
// Create a new user
router.post('/register', csrfProtection, validateEmailAndPassword, asyncHandler(async (req, res) => {
  const {
    firstName,
    lastName,
    email,
    password,
  } = req.body;

  const user = await db.User.build({
    firstName,
    lastName,
    email
  });

  

  const validatorErrors = validationResult(req);

  if (validatorErrors.isEmpty()) {
    const hashedPassword = await bcrypt.hash(password, 10);
    user.hashedPassword = hashedPassword;
    await user.save();
    const newUser = await db.User.findOne({
      where: {
        email
      }
    })
    const watchlist = await db.Watchlist.create({
      userId: newUser.id
    })
    loginUser(req, res, user);
    res.redirect('/users');
  } else {
    const errors = validatorErrors.array().map((error) => error.msg);
    res.render('register', {
      title: 'Register',
      user,
      errors,
      csrfToken: req.csrfToken()
    });
  }
  }));

// render login page
router.get('/login', csrfProtection, (req, res) => {
  res.render('login', {
    title: 'Login',
    csrfToken: req.csrfToken()
  })
});

router.post('/login', validateEmailAndPasswordForLogin, restoreUser, csrfProtection, asyncHandler(async (req, res) => {
  const {
    email,
    password
  } = req.body;
  let errors = [];
  const validatorErrors = validationResult(req);


  if (validatorErrors.isEmpty()) {
    const user = await db.User.findOne({ where: { email } });
    console.log(user);

    if (user !== null) {
      const passwordMatch = await bcrypt.compare(password, user.hashedPassword.toString());

      if (passwordMatch) {
       loginUser(req, res, user);
       return res.render('user', { user, csrfToken: req.csrfToken() });
      }
    }

    errors.push('Login failed for the provided email and password');
  } else {
    errors = validatorErrors.array().map((error) => error.msg);
  }

  // res.redirect('/users');
 // TODO: Do we need to pass the csrf token at this point?
  res.render('login', {
    title: 'Login',
    email,
    errors,
    csrfToken: req.csrfToken()
  });

}));


module.exports = router;
