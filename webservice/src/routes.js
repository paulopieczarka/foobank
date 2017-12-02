const Login = require("./controllers/Login");
const Register = require("./controllers/Register");

function initializeRoutes(app)
{
    if(!app) {
        return;
    }

    app.use("/api/register", Register);
    app.use("/api/login", Login);
}

module.exports = initializeRoutes;