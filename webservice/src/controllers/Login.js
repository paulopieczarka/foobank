const express = require("express");
const router = express.Router();
const User = require("../models/User");

router.get("/", (req, res) => {
    res.send("You are at /login.");
});

router.post("/", (req, res) => {
    const { body } = req;
    User.findOne({ email: body.email }, (err, user) => {
        if(err) 
        {
            console.log(err);
            res.send({ status: "fail", result: error, message: "Houve um erro no processamento." });
            return;
        }

        if(!user || body.password !== user.password) {
            res.send({ status: "fail", message: "Email ou senha invalido." });
            return;
        }

        console.log(`User ${user.email} is authenticated.`);
        res.send({ status: "success", result: user });
    });
});

module.exports = router;