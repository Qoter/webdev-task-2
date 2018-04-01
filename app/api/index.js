'use strict';

require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');

const routes = require('./routes');

const app = express();
app.use(bodyParser.json());
routes(app);
app.listen(process.env.PORT, () => {
    console.info(`Listen at: ${process.env.PORT}`);
});

module.exports = app;
