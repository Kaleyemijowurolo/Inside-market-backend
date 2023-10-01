const winston = require("winston");
const express = require("express");
const morgan = require("morgan");
const { notFound, errorHandler } = require("./middleware/errorHandler");

const app = express();
require("dotenv").config();

require("./startup/logging")();

app.use(morgan("tiny"));

require("./startup/cors.js")(app);
require("./startup/routes")(app);
require("./startup/db")();

const port = process.env.PORT;

app.use(notFound);
app.use(errorHandler);

const server = app.listen(port, () =>
  winston.info(`Listening on port ${port}...`)
);

module.exports = server;

