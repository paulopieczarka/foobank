const Login = require("./controllers/Login");
const Register = require("./controllers/Register");

function initializeRoutes(app)
{
    if(!app) {
        return;
    }

    app.use("/register", Register);
    app.use("/login", Login);
}

module.exports = initializeRoutes;