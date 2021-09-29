//TA03 PLACEHOLDER
const express = require('express');
const router = express.Router();

const productController = require('../controllers/products');

router.get('/', productController.getProduct);

router.get('/search', productController.getFilteredProduct);

module.exports = router;
