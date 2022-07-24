require("dotenv").config();

module.exports = {
  dbUri: process.env.MONGODB_URI ?? "",
  port: process.env.PORT ?? 3001,
  secret: process.env.JWT_SECRET,
};
