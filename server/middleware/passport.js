const jwtStrategy = require('passport-jwt').Strategy;
const extract = require('passport-jwt').ExtractJwt;
const config = require('../config/config.js');
const Admin = require('../schemas/adminsSchema')

const options = {
    jwtFromRequest: extract.fromAuthHeaderAsBearerToken(),
    secretOrKey: config.jwtKey
}

//в метод кoллбек написать запрос в бд
module.exports = passport => {
    passport.use(new jwtStrategy(options, (payload, done) => {
        try {
            const user = Admin.find({email:payload.email});
            if (user) {
                done(null, user);
            } else {
                done(null, false);
            }
        } catch (e) {
            console.log(e);
        }
    }));
}