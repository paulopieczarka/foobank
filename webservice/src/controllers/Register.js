const express = require("express");
const router = express.Router();

const User = require("../models/User");
const Account = require("../models/Account");

router.get("/", (req, res) => {
    res.send("You are at /register.");
});

router.post("/", (req, res) => {
    const user = new User(req.body);
    
    const account = new Account();
    account.owner = user;

    user.accounts = [account];
    user.save(err => {
        if(err) {
            res.send({ status: "fail", result: err });
        }

        res.send({      
            status: "success", 
            message: "Registro realizado com sucesso.", 
            result: user.email 
        }); 
    });
});

module.exports = router;