const express = require("express");
const cors = require("cors");
const bodyParser = require('body-parser');

const initializeRoutes = require("./routes");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use( cors() );

app.get("/", (req, res) => 
    res.send("Hello! Thank god I'm not written in Java.")
);

initializeRoutes(app);

module.exports = app;