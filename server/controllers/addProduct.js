const { addProductQuery } = require('../database/queries');
const customizedError = require('../utils/customizedError');

const addProduct = (req, res, next) => addProductQuery(req.body).then(({ rowCount }) => {
  if (rowCount) {
    res.json({ msg: 'Product added successfully', status: 202 });
  } else { throw customizedError(400, 'Product not added'); }
}).catch((err) => next(err));

module.exports = addProduct;
