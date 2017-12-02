const express = require("express");
const passport = require("../util/passport");
const router = express.Router();

router.get("/", (req, res) => {
    res.send("You are at /login.");
});

router.post("/", (req, res) => {
    passport.authenticate("local", (err, user) => {
        if(err) {
            res.send({ status: "fail", result: err });
            return;
        }

        res.send({ status: "success", result: user });
    });
});

module.exports = router;