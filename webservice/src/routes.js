const Login = require("./controllers/Login");
const Register = require("./controllers/Register");
const Account = require("./controllers/Account");
const Boleto = require("./controllers/Boleto");

function initializeRoutes(app)
{
    if(!app) {
        return;
    }

    app.use("/api/register", Register);
    app.use("/api/login", Login);
    app.use("/api/account", Account);
    app.use("/api/boleto", Boleto);
}

module.exports = initializeRoutes;