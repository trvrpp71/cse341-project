const path = require('path');

const express = require('express');

const router = express.Router();

const booksArray = [];

router.post('/addBook', (req,res,next)=> {
    booksArray.push({ 
        title: req.body.title,
        author: req.body.author,
        price: req.body.price
    });
    res.redirect('/pr02');
})

router.get('/', (req, res, next) => {
    res.render('pages/proveActivities/pr02/pr02a', {
        pageTitle: 'PR02 Mod Book',
        path: '/pr02/',
    })
});


//module.exports = router;
exports.routes = router;
//module.exports = booksArray;
exports.books = booksArray;

