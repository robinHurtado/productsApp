const express = require('express');
const routes = express.Router();

const objController = require("../controller/productsController");

routes.get('/products', objController.fetchproducts);

module.exports = routes;
