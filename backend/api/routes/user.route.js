const express = require("express");
const passport = require("passport");
const UserService = require("../services/user.service");

const userRouter = express.Router();

userRouter.get(
  "/gallery",
  passport.authenticate("jwt", { session: false }),
  async (req, res, next) => {
    try {
      const { page, limit, query } = req.query;
      const gallery = await UserService.gallery(
        req.user.sub,
        query,
        limit ? Number(limit) : limit,
        page ? Number(page) : page
      );
      res.json(gallery);
    } catch (error) {
      next(error);
    }
  }
);

userRouter.get(
  "/session",
  passport.authenticate("jwt", { session: false }),
  async (req, res, next) => {
    try {
      const user = await UserService.find(req.user.sub);
      res.json(user);
    } catch (error) {
      next(error);
    }
  }
);

module.exports = userRouter;
