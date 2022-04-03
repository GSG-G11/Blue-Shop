const getAllProductsDB = require('../database/queries/getAllProducts');
const { customizedError } = require('../utils/customizedError');

const getAllProducts = (req, res, next) => {
  getAllProductsDB()
    .then(({ rows, rowCount }) => {
      if (rowCount) {
        res.status(200).json({ success: true, data: rows });
      } else {
        throw customizedError(500, 'Database ERROR');
      }
    })
    .catch((error) => {
      next(error);
    });
};

module.exports = getAllProducts;
