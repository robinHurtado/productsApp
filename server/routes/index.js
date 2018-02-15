const express = require('express');
const routes = express.Router();

const user = require("../controller/hotelController");

routes.get('/hotels', user.fetchHotels);
/*
routes.post('/login', user.loginUser);

routes.post('/change-password', user.changePassword);*/

module.exports = routes;
