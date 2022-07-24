const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { secret } = require("../../config/env.conf");

const User = require("../models/user.model");

class AuthService {
  static async login(email, password) {
    const user = await User.findOne({ email });

    if (!user) throw new Error("user does not exist");

    const validPassword = bcrypt.compareSync(password, user.password);

    if (!validPassword) throw new Error("invalid password");

    return user;
  }

  static async signIn(user) {
    user.password = bcrypt.hashSync(user.password, 10);

    const newUser = new User(user);

    await newUser.save();

    const token = jwt.sign({ sub: newUser._id }, secret);

    return { user: newUser, token };
  }
}

module.exports = AuthService;
