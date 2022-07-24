const mongoose = require("mongoose");
const { dbUri } = require("../config/env.conf");

mongoose
  .connect(dbUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Success connection db"))
  .catch((error) => console.error(error));
