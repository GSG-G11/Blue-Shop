const connection = require('../config/connection');

const getAllProducts = () => connection.query('SELECT * FROM products');

module.exports = getAllProducts;
