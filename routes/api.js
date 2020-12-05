const express = require('express');
const router = express.Router();

//buttons in public/js will send post/patch requests
router.get('/', function(req, res, next) {
    res.json({message: 'hello'});
    // CRUD functions go here
  });
  
  module.exports = router;