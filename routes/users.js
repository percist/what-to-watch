const express = require('express');
const { check, validationResult } = require('express-validator')
const { loginUser, restoreUser } = require('../auth');
const { asyncHandler, handleValidationErrors, csrfProtection} = require('../utils')
const router = express.Router();

const db = require('../db/models');
// const { User } = db;

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
// Render index
router.get('/', asyncHandler(async(req, res) => {
  res.render('index');
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
router.post('/users', csrfProtection, asyncHandler(async (req, res) => {
  const {
    firstName,
    lastName,
    email,
    password
  } = req.body;

  const user = db.User.build({
    firstName,
    lastName,
    email,
    password
  });

  if (validatorErrors.isEmpty()) {
    const hashedPassword = await bcrypt.hash(password, 10);
    user.hashedPassword = hashedPassword;
    await user.save();
    loginUser(req, res, user);
    res.redirect('/');
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

router.post('/login', csrfProtection, validateEmailAndPassword, asyncHandler(async (req, res) => {
  const {
    emailAddress,
    password
  } = req.body;

  let errors = [];
  const validatorErrors = validationResult(req);

  if (validatorErrors.isEmpty()) {
    const user = await db.User.findOne({ where: { emailAddress } });

    if (user !== null) {
      const passwordMatch = await bcrypt.compare(password, user.hashedPassword.toString());

      if (passwordMatch) {
        loginUser(req, res, user);
        return res.redirect('/');
      }
    }

    errors.push('Login failed for the provided email and password');
  } else {
    errors = validatorErrors.array().map((error) => error.msg);
  }

  res.render('login', {
    title: 'Login',
    emailAddress,
    errors,
    csrfToken: req.csrfToken()
  });

}));

// router.post('/user/logout', (req, res) => {
//   logoutUser(req, res);
//   res.redirect('/user/login');
// })

module.exports = router;
