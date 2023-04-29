const mongoose = require("mongoose");
require("./VocabModel");

const Vocab = mongoose.model("vocabs");

module.exports = (app) => {
  app.post("/api/vocabs", async (req, res) => {
    const { native, foreign } = req.body;

    const vocab = new Vocab({
      native,
      foreign,
    });

    await vocab.save();

    res.send("OK");
  });

  app.get("/api/vocabs", async (req, res) => {
    const vocabs = await Vocab.find({});

    res.send(vocabs);
  });
};
