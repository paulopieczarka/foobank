const passport = require("passport");
const LocalStrategy = require('passport-json').Strategy;
const User = require("../models/User");

passport.use(new LocalStrategy((username, password, done) => {
    console.log(username, password);
    User.findOne({ email: username }, (err, user) => {

       console.log(user);
        if(err) {
            return done(err);
        }

        if(!user) {
            return done(null, false, { message: "E-mail não encontrado." });
        }

        // TODO: Fix this.
        if(user.password !== password) {
            return done(null, false, { message: "Senha inválida." });
        }

        console.log(user);
        return done(null, user);
    });
}));

module.exports = passport;