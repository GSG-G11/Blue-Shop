<<<<<<< Updated upstream
const apiRouter = require('./api');

module.exports = apiRouter;
=======
const router = require('express').Router();

const { addProduct } = require('../controllers');

router.post('/product', addProduct);

module.exports = router;
>>>>>>> Stashed changes
