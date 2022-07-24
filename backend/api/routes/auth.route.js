const express = require("express");
const { body, validationResult } = require("express-validator");
const passport = require("passport");
const AuthService = require("../services/auth.service");

const authRouter = express.Router();

// Login
authRouter.post(
  "/login",
  passport.authenticate("local", { session: false }),
  async (req, res, next) => {
    try {
      res.json(req.user);
    } catch (error) {
      next(error);
    }
  }
);

authRouter.post(
  "/register",
  body(["name", "lastName", "password"]).isString(),
  body("email").isEmail().normalizeEmail(),
  async (req, res, next) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const user = await AuthService.signIn(req.body);
      res.status(201).json(user);
    } catch (error) {
      next(error);
    }
  }
);

module.exports = authRouter;
