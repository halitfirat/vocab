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

app.get("/", (req, res) => {
  res.send("Vocab API");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("App listening on port: ", PORT);
});
