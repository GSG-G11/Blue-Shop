const express = require('express');

const { getAllProducts, addProduct, deleteProduct } = require('../controllers');

const apiRouter = express.Router();

apiRouter.get('/products', getAllProducts);
apiRouter.post('/product', addProduct);
apiRouter.delete('/products/:id', deleteProduct);
module.exports = apiRouter;
