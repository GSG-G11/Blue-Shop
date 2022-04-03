const connection = require('../config/connection');

const addProductQuery = ({
  name, description, image, catagory: category, price,
}) => {
  const query = {
    text: 'INSERT INTO products (name, description, image, category, price) VALUES ($1, $2, $3, $4, $5) RETURNING *',
    values: [name, description, image, category, price],
  };
  return connection.query(query);
};

module.exports = addProductQuery;
