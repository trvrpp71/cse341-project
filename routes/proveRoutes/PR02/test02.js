const path = require('path');
const express = require('express');
const router = express.Router();

// router.get('/', (req, res, next) => {
//     res.render('pages/proveActivities/pr02/testpage02', {
//       title: 'Prove Activity 02',
//       path: '/proveActivities/pr02/', // For pug, EJS
//     });
//   });
  
const booksArray = [];

router.use


router.get('/', (req, res, next) => {
    const books = booksArray;
    res.render('pages/proveActivities/pr02/pr02Main', {
        books:books,
        title: 'PR02 Book List',
        path: '/pr02',
     });
});

router.get('/pr02Add', (req, res) => {
  res.render('pages/proveActivies/pr02/pr02Add');
})

  
module.exports = router;