const express = require('express');
const productRoute = express.Router();
const { uploadProduct, getAllProducts } = require('../controller/productController.js');

productRoute.post('/upload/:userId', uploadProduct);
productRoute.get('/getall', getAllProducts);

module.exports = productRoute;