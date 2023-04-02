const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express("express");

app.use(
  cors({
    origin: process.env.ORIGIN,
  })
);
app.use(express.json());

app.get("/data", (req, res) => {
  res.send({ native: "laufen", foreign: "run" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("App listening on port: ", PORT);
});
