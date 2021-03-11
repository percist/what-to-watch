var express = require('express');
var router = express.Router();
const { loginUser, logoutUser, restoreUser } = require('../auth');
const { asyncHandler, handleValidationErrors, csrfProtection} = require('../utils')
const db = require('../db/models');

/* GET home page. */
router.get(
  '/', 
csrfProtection,
restoreUser,
asyncHandler(async(req, res, next) => {
  const user = res.locals.user;
  if (user){
    return res.render('user', { 
      user, 
      csrfToken: req.csrfToken() 
    });
  }
  res.render('index', { 
    title: 'What to Watch',
    csrfToken: req.csrfToken()
  });
}));


module.exports = router;
