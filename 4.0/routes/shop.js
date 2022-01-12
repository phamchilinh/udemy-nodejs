const path = require('path');

const express = require('express');

const rootDir = require('../_util/path');
const adminData = require('./admin');

const router = express.Router();

//hbs
router.get('/', (req, res, next) => {
  const products = adminData.products;
  res.render('shop', {
    prods: products,
    pageTitle: 'Shop',
    path: '/',
    hasProducts: products.length > 0,
    activeShop: true,
    productCSS: true
  });
});

//pug
// router.get('/', (req, res, next) => {
//   const products = adminData.products;
//   res.render('shop', {prods: products, pageTitle: 'Shop', path: '/'});
// });

module.exports = router;
