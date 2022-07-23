const express = require("express");
var bodyParser = require("body-parser");
require('dotenv').config();

const port = 3000
const app = express();

const orderRoutes = require('./src/components/orders/orderRoutes');
const setupDB = require("./src/config/db");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

setupDB()

app.use('/orders', orderRoutes)

app.listen(port, () => {
    console.log(`server running on port ${port}`);
  });
