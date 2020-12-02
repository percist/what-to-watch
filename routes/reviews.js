
const express = require('express');
const { check, validationResult } = require('express-validator')
const { asyncHandler, handleValidationErrors, csrfProtection } = require('../utils')
const router = express.Router();

const db = require('../db/models');


router.get('reviews/new', (req, res) => {
  res.render('new-review.pug', {title: "Leave a Review"})
})