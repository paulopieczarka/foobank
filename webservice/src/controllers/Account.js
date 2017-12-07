const express = require("express");
const router = express.Router();
const Account = require("../models/Account");

router.get("/", (req, res) => {
    res.send({ status: "success", message: "You are at /account." });
});

router.get("/:account", (req, res) => {
    Account.findOne({ _id: req.params.account }, (error, account) => {
        if(error) {
            console.log(error);
            res.send({ status: "error", stack: error, message: "Não foi possível obter conta." });
            return;
        }

        if(!account) {
            res.send({ status: "error", message: "Não foi possível encontrar conta" });
            return;
        }

        console.log(`Acesso a conta #${account.number} -> (${(new Date()).toLocaleDateString()}).`);
        res.send({ status: "success", data: account });
    });
});

module.exports = router;