const connection = require('../config/connection');

const getAllProductsDB = () => connection.query('SELECT * FROM produucts');

module.exports = getAllProductsDB;
