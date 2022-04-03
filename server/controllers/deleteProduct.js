const { deleteProductQuery } = require('../database/queries');

const deleteProduct = (req, res) => {
  const { id } = req.params;
  deleteProductQuery(id).then(() => res.json({ status: 200, message: 'Product deleted successfully' }));
};

module.exports = deleteProduct;
