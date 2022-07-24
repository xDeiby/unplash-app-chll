const { Schema, model } = require("mongoose");

const UserSchema = new Schema({
  name: {
    required: true,
    type: String,
  },
  lastName: {
    required: true,
    type: String,
  },
  email: {
    required: true,
    unique: true,
    type: String,
  },
  password: {
    required: true,
    type: String,
  },
});

const User = model("User", UserSchema);

module.exports = User;
