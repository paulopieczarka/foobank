const passport = require("passport");
const LocalStrategy = require('passport-local').Strategy;
const User = require("../models/User");

passport.use(new LocalStrategy((username, password, done) => {
    User.findOne({ email: username }, (err, user) => {
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

        return done(null, user);
    });
}));

module.exports = passport;