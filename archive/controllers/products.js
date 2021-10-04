
const Product = require('../models/product');

exports.getProduct = (req, res, next) => {
    Product.fetchAll(products => {
      res.render('pages/teamActivities/ta03', {
        title: 'Team Activity 03',
        prods: products,
        path: '/teamActivities/ta03', // For pug, EJS
      });
    });
};



exports.getFilteredProduct = (req, res, next) => {
  const query = req.query.query.toLowerCase();
  Product.search(query, (filteredProducts) => { 
    res.render('pages/teamActivities/ta03', {
      title: 'Team Activity 03',
      prods: filteredProducts,
      path: '/teamActivities/ta03', // For pug, EJS
    });
  });
};