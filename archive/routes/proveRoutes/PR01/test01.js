const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.render('pages/proveActivities/pr01/testpage01', {
      title: 'Prove Activity 01',
      path: '/proveActivities/pr01/', // For pug, EJS
    });
  });
  
  
  
  module.exports = router;