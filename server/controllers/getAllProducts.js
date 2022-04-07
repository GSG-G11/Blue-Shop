const { getAllProductsQuery } = require('../database/queries');

const getAllProducts = (req, res, next) => {
  getAllProductsQuery()
    .then(({ rows }) => {
      res.status(200).json({ success: true, data: rows });
    })
    .catch((error) => {
      next(error);
    });
};

module.exports = getAllProducts;
