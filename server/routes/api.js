const express = require('express');

const {
  getAllProducts, addProduct, deleteProduct, updateProduct,
} = require('../controllers');

const apiRouter = express.Router();
apiRouter.get('/products', getAllProducts);
apiRouter.post('/product', addProduct);
apiRouter.delete('/products/:id', deleteProduct);
apiRouter.put('/products/:id', updateProduct);
module.exports = apiRouter;
