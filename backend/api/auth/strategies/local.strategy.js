const jwt = require("jsonwebtoken");
const { secret } = require("../../../config/env.conf");

const { Strategy } = require("passport-local");
const AuthService = require("../../services/auth.service");

const localStrategy = new Strategy(
  {
    usernameField: "email",
  },
  async (email, password, done) => {
    try {
      const user = await AuthService.login(email, password);
      const token = jwt.sign({ sub: user._id }, secret, { expiresIn: "24h" });

      done(null, { user, token });
    } catch (error) {
      done(error, false);
    }
  }
);

module.exports = localStrategy;
