const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect(process.env.MONGO_URI);

const app = express("express");

app.use(
  cors({
    origin: process.env.ORIGIN,
  })
);
app.use(express.json());

app.get("/", (req, res) => {
  res.send({ vocab: "API" });
});

require("./vocabRoutes")(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("App listening on port: ", PORT);
});
