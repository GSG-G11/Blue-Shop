const connection = require('../config/connection');

const getAllProductsDB = () => connection.query('SELECT * FROM products');

module.exports = getAllProductsDB;
