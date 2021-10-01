const path = require('path');
const express = require('express');
const router = express.Router();

const booksData = require('./pr02a');

router.get('/', (req, res, next) => {
    const books = booksData.books;
    res.render('pages/proveActivities/pr02/pr02Main', {
      title: 'Prove Activity 02',
      path: '/proveActivities/pr02/', // For pug, EJS
    });
  });

module.exports = router;