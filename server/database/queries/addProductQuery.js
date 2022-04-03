const connection = require('../config/connection');

const addProductQuery = ({
  name, description, image, catagory, price,
}) => {
  const query = {
    text: 'INSERT INTO products (name, description, image, catagory, price) VALUES ($1, $2, $3, $4, $5) RETURNING *',
    values: [name, description, image, catagory, price],
  };
  return connection.query(query);
};

module.exports = addProductQuery;
