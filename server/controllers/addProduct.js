const { addProductQuery } = require('../database/queries');

const addProduct = (req, res, next) => addProductQuery(req.body)
  .then(({ rows }) => {
    res.json({
      msg: 'Product added successfully',
      status: 202,
      product: rows[0],
    });
  })
  .catch((err) => next(err));

module.exports = addProduct;
