const { validationResult } = require('express-valdator');
const csrf = require('csurf');
const csrfProtection = csrf({ cookie: true });


const asyncHandler = (handler) => 
(req, res, next) => 
handler(req, res, next).catch(next);

const handleValidationErrors = (req, res, next) => {
    const validationErr = validationResult(req);

    if (!validationErr.isEmpty()) {
        const errors = ValidationErr.array().map((error) => error.msg);
        const err = Error("Bad Request!");
        err.status = 400;
        err.title = "Bad Request!";
        err.errors = errors;
        return next(err);
    }
    next();
};

module.exports = {
    asyncHandler,
    handleValidationErrors,
    csrfProtection
};