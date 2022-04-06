const { Pool } = require('pg');
require('env2')('.env');

const {
  NODE_ENV, DEV_DB_URL, PROD_DB_URL,
} = process.env;

let dbURl = PROD_DB_URL;
let ssl = false;

if (NODE_ENV === 'dev') {
  dbURl = DEV_DB_URL;
} else if (NODE_ENV === 'start') {
  ssl = { rejectUnauthorized: false };
}

const connection = new Pool({
  connectionString: dbURl,
  ssl,
});

module.exports = connection;
