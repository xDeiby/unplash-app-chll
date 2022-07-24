const { Schema, model, Types } = require("mongoose");

const PhotoSchema = new Schema({
  label: {
    required: true,
    type: String,
  },
  image: {
    required: true,
    type: String,
  },
  userId: {
    required: true,
    type: Types.ObjectId,
    ref: "User",
  },
});

PhotoSchema.index({ label: "text" });

const Photo = model("Photo", PhotoSchema);

module.exports = Photo;
