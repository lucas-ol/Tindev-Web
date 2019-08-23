const express = require('express');
const DevController = require('./controllers/DevController');
const LikeController = require('./controllers/LikeController');
const routes = express.Router();



routes.post('/devs', DevController.Store);
routes.post('/devs/:devId/likes', LikeController.Store);

module.exports = routes;