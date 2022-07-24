const { Strategy, ExtractJwt } = require("passport-jwt");
const { secret } = require("../../../config/env.conf");

const jwtStrategy = new Strategy(
  {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: secret,
  },
  (payload, done) => {
    done(null, payload);
  }
);

module.exports = jwtStrategy;
