const express = require('express');
const routes = express.Router();

const productController = require("../controller/productsController");

const contactController = require("../controller/contactController");

routes.get('/products', productController.fetchproducts);

routes.post('/contact', contactController.showData);

module.exports = routes;
