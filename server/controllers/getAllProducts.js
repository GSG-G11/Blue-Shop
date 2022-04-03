const getAllProductsDB = require('../database/queries/getAllProducts');

const getAllProducts = (req, res) => {
  getAllProductsDB()
    .then((data) => {
      res.status(200).json({ success: true, data: data.rows });
    })
    .catch(() => res.status(500).json({ success: false, error: 'DataBASE ERROR' }));
};

module.exports = getAllProducts;
