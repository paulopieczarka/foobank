const express = require("express");
const router = express.Router();
const Account = require("../models/Account");
const Boleto = require("../models/Boleto");
const Activity = require("../models/Activity");
const User = require("../models/User");

router.get("/", (req, res) => {
    res.send({ status: "success", message: "You are at /account." });
});

router.get("/home/:user", (req, res) => {

    User.findOne({ _id: req.params.user })
    .populate("accounts")
    .exec((err, user) => {

        Activity.find({ user: req.params.user }, (err, list) => {
            res.send({ status: "success", message: "You are at /account.", user: user, activities: list });
        })
    

    });
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

router.post("/add", (req, res) => {
    User.findOne({ _id: req.body.id })
    .populate("accounts")
    .exec((err, user) => {
        Account.findOne({ _id: user.accounts[0]._id }, (err, account) => {
            account.balance += Number(req.body.amount);
            account.save();

            const logg = new Activity({
                user: user,
                message: `Deposito de ${req.body.amount} taps realizado.`,
                icon: "local_atm" 
            });
            logg.save();

            res.send({ status: "success", message: "Deposito realizado!" });
        });
    });
});

router.post("/pay", (req, res) => {

    Boleto.findOne({ _id: req.body.id }, (err, boleto) => {
        if(err) {
            res.send({ status: "fail", message: "Boleto não encontrado." });
            return;
        }

        User.findOne({ _id: req.body.buyer })
        .populate("accounts")
        .exec((err, user) => {
            console.log(`Pagando #${boleto._id} por ${user.name}..`);

            if(boleto.paidAt !== null) {
                res.send({ status: "paid", message: "Boleto já foi pago." });
                return;
            }

            if(user.accounts[0].balance < boleto.amount) {
                res.send({ status: "nofunds", message: "Saldo insuficiente." });
                return;
            }

            Account.findOne({ _id: user.accounts[0]._id }, (err, account) => {
                account.balance -= Number(boleto.amount);
                account.save();

                boleto.status = "pago";
                boleto.paidAt = new Date();
                boleto.save();

                const logg = new Activity({
                    user: user,
                    message: `Boleto de ${boleto.amount} taps foi pago.`,
                    icon: "attach_money" 
                });
                logg.save();

                res.send({ status: "success", message: "Boleto pago.", boleto: boleto });
            });
        });
    });
});


module.exports = router;