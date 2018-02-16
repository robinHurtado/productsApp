const express = require('express');
const routes = express.Router();

const objController = require("../controller/hotelController");

routes.get('/hotels', objController.fetchHotels);

routes.post('/hotel', objController.fetchHotel);
/*
routes.post('/change-password', objController.changePassword);*/

module.exports = routes;
