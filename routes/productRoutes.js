const express = require('express');
const productRoute = express.Router();
const { uploadProduct, getAllProducts } = require('../controller/productController.js');
const upload = require('../config/multer.js');

productRoute.post('/upload/:userId', upload.single('image'), uploadProduct);
productRoute.get('/getall', getAllProducts);

module.exports = productRoute;