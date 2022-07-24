const whiteList = ["http://localhost:3000"];

const corsOptions = {
  origin: (origin, callback) => {
    if (!origin || whiteList.includes(origin)) callback(null, true);
    else callback(new Error("not allowed origin by CORS"));
  },
};

module.exports = corsOptions;
