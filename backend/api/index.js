const express = require("express");
const cors = require("cors");

const { port } = require("../config/env.conf");
const { authRouter, photoRouter, userRouter } = require("./routes");
const handleError = require("./middlewares/handleError");
const corsOptions = require("../config/cors.conf");

require("./database");
require("./auth");

const app = express();

app.use(express.json());
app.use(cors(corsOptions));

// routes
app.use("/api/auth", authRouter);
app.use("/api/photos", photoRouter);
app.use("/api/user", userRouter);

app.use(handleError);

app.listen(port, () => console.log("Server listen on port", port));
