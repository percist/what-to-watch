
const express = require('express');
const { check, validationResult } = require('express-validator')
const { asyncHandler, handleValidationErrors, csrfProtection } = require('../utils')
const router = express.Router();

const db = require('../db/models');

router.get('/', csrfProtection, asyncHandler(async(req, res) => {
    
    res.render('new-review', { csrfToken: req.csrfToken(), })
}));

router.post('/movies/review', (req, res) => {
  
});



module.exports = router;