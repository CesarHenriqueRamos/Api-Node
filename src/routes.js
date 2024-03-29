const express = require('express');
const routes = express.Router();
const ProductController = require('./controllers/ProductController');

//primeira rota
routes.get('/products', ProductController.index);
routes.post('/products', ProductController.store);
routes.get('/products/:id', ProductController.show);
routes.put('/products/:id', ProductController.uptade);
routes.delete('/products/:id', ProductController.destroy);

module.exports = routes;