const { updateProductQuery } = require('../database/queries');

const updateProduct = (req, res, next) => {
  const { id } = req.params;
  const {
    name, description, image, category, price,
  } = req.body;
  updateProductQuery(name, description, image, category, price, id)
    .then((data) => { res.json({ success: true, data: data.rows }); })
    .catch((error) => next(error));
};

module.exports = updateProduct;
