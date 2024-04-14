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

  app.put("/api/vocabs/:vocabId", async (req, res) => {
    const { native, foreign } = req.body;

    const updatedVocab = await Vocab.findOneAndUpdate(
      { _id: req.params.vocabId },
      {
        native,
        foreign,
      },
      { new: true }
    );

    if (updatedVocab) {
      res.send(updatedVocab);
    }
  });

  app.delete("/api/vocabs/:vocabId", async (req, res) => {
    const { vocabId } = req.params;

    const { deletedCount } = await Vocab.deleteOne({ _id: vocabId });

    if (deletedCount === 1) {
      res.send(vocabId);
    }
  });
};
