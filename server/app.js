const { join } = require('path');
require('env2')('.env');
const express = require('express');
const compression = require('compression');
const apiRouter = require('./routes/api');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(join(__dirname, '..', 'client', 'public')));
app.use(compression());
app.set('port', process.env.PORT || 4000);

app.use('/api/v1', apiRouter);

module.exports = app;
