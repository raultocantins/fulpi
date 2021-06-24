const authSecret =
  "f4f62bc83fa5c7b98ee1d1f849a0904edbd3c7b1db8aa9fcbfa4f16158321cf2fc61423acd9fcf320f15453a671acbffda117615db9f1d5b48a0bae3fc155bbf";
const passport = require("passport");
const passportJwt = require("passport-jwt");
const { Strategy, ExtractJwt } = passportJwt;
const db = require("../../database/db");

const params = {
  secretOrKey: authSecret,
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
};
const strategy = new Strategy(params, (payload, done) => {
  db("user02")
    .where({ id: payload.id })
    .first()
    .then((user) => done(null, user ? { ...payload } : false))
    .catch((err) => done(err, false));
});
passport.use(strategy);

const authenticate = () => passport.authenticate("jwt", { session: false });

module.exports = authenticate;
