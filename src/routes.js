const express = require('express');
const DevController = require('./controllers/DevController');
const LikeController = require('./controllers/LikeController');
const DislikeController = require('./controllers/DislikeController');
const routes = express.Router();



routes.post('/devs', DevController.Store);
routes.get('/devs', DevController.Index);

routes.post('/devs/:devId/likes', LikeController.Store);
routes.post('/devs/:devId/dislikes', DislikeController.Store);
module.exports = routes;