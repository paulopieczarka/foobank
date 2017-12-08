const express = require("express");
const router = express.Router();
const Boleto = require("../models/Boleto");

router.get("/", (req, res) => {
    res.send("You are at /boleto.");
});

router.post("/gerar", (req, res) => {

    const boleto = new Boleto({ owner: { _id: req.body.id }, amount: req.body.amount });
    boleto.save();

    res.send({
        status: "OK",
        boleto: {
            ...boleto._doc
        }
    });
});

router.get("/:id", (req, res) => {
    Boleto.find({})
    .exec((err, boletos) => {
        res.send(boletos);
    });
});

module.exports = router;