const connection = require('../config/connection');

const updateProductQuery = (name, description, image, category, price, id) => connection.query({
  text: 'UPDATE products SET name=$1,description=$2,image=$3,category=$4,price=$5 WHERE id=$6 RETURNING*',
  values: [name, description, image, category, price, id],
});
module.exports = updateProductQuery;
