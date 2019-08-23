const express = require('express');
const DevController = require('./controllers/DevController');

const routes = express.Router();



routes.post('/dev', DevController.Store);


module.exports = routes;