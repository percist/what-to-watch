
const express = require('express');
const { check, validationResult } = require('express-validator')
const { asyncHandler, handleValidationErrors, csrfProtection } = require('../utils')
const router = express.Router();

const db = require('../db/models');

const checkReviewAndRating = [
    check('rating')
        .not()
        .isEmpty()
        .withMessage('Please rate the movie'),
    check('movieReview')
        .exists({checkFalsy: true})
        .withMessage('Please write in the text box'),
    
];


router.get('/', csrfProtection, asyncHandler(async(req, res) => {
    
    res.render('new-review', { csrfToken: req.csrfToken(), })
}));

router.post('/movies/review', checkReviewAndRating, (req, res) => {
    const validatorErrors = validationResult(req);
});



module.exports = router;