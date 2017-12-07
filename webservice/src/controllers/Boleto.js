const express = require("express");
const router = express.Router();
const User = require("../models/Boleto");

router.get("/", (req, res) => {
    res.send("You are at /boleto.");
});

module.exports = router;