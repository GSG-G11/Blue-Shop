const express = require('express');
const { getAllProducts } = require('../controllers');

const apiRouter = express.Router();

apiRouter.get('/products', getAllProducts);

module.exports = apiRouter;
