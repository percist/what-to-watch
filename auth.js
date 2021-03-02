const db = require('./db/models');

const loginUser = (req, res, user) => {
  req.session.auth = {
    userId: user.id,
  };
  return res.redirect('/search/alpha-order');
};

const logoutUser = (req, res) => {
  delete req.session.auth;
};


const requireAuth = (req, res, next) => {
  if (!res.locals.authenticated) {
    return res.redirect('/user/login');
  }
  return next();
}

const restoreUser = async (req, res, next) => {

  if (req.session.auth) {
    const { userId } = req.session.auth;
    // console.log(userId)
    try {
      const user = await db.User.findByPk(userId);
      // console.log(user)
      if (user) {
        res.locals.authenticated = true;
        res.locals.user = user;
        next();
      }
    } catch (err) {
      res.locals.authenticated = false;
      // res.redirect('/');
      next(err);
    }
  } else {
    res.locals.authenticated = false;
    // res.redirect('/');
    next();
  }
};

module.exports = {
  loginUser,
  requireAuth,
  logoutUser,
  restoreUser,
};