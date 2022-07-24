const express = require("express");
const { body, param, validationResult } = require("express-validator");
const passport = require("passport");

const PhotoService = require("../services/photo.service");

const photoRouter = express.Router();

photoRouter.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  body(["label", "image"]).isString(),
  async (req, res, next) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      req.body.userId = req.user.sub;

      const photo = await PhotoService.create(req.body);

      res.status(201).json(photo);
    } catch (error) {
      next(error);
    }
  }
);

photoRouter.patch(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  param("id").isString(),
  body("label").isString(),
  body("image").isURL(),
  async (req, res, next) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      delete req.body.userId;
      const photo = await PhotoService.update(
        req.params.id,
        req.body,
        req.user.sub
      );

      res.json(photo);
    } catch (error) {
      next(error);
    }
  }
);

photoRouter.delete(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  param("id").isString(),
  async (req, res, next) => {
    try {
      const photo = await PhotoService.remove(req.params.id, req.user.sub);
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      res.json(photo);
    } catch (error) {
      next(error);
    }
  }
);

module.exports = photoRouter;
