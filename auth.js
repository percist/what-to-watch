const jwt = require('jsonwebtoken');
const { jwtConfig } = require('./config');
const { User } = require('./db/models');
const bearerToken = require('express-bearer-token');

const { secret, expiresIn } = jwtConfig;

const getToken = (user) => {
    const tokenData = {
        id: user.id,
        name: user.name,
        email: user.email,
        watchList: user.watchListId,
    };

    const token = jwt.sign(
        { data: tokenData},
        secret,
        { expiresIn: parseInt(expiresIn, 10)}
    );
    return token;
};

const createUser = (req, res, next) => {
    const { token } = req;
    if(!token) {
        return res.set('WWW-Authenticate', 'Bearer').status(401).end();
    }
    return jwt.verify(token, secret, null, async (err, jwtPayLoad) => {
        if (err) {
            err.status = 401;
            return next(err);
        }

        const { id } = jwtPayLoad.data;

        try {
            req.user = await User.findByPk(id);
        } catch (e) {
            return next(e);
        }

        if (!req.user) {
            return res.set('WWW-Authenticate', 'Bearer').status(401).end();
        }
        return next();
    });
};

const requireAuth = [bearerToken({ cookie: { signed: true, secret: '???', key: '???' } }), createUser];

module.exports = { getToken, requireAuth };
