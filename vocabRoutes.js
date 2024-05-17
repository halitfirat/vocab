const mongoose = require("mongoose");
require("./VocabModel");

const Vocab = mongoose.model("vocabs");

module.exports = (app) => {
  app.post("/api/vocabs", async (req, res) => {
    try {
      const vocab = new Vocab(req.body);
      await vocab.save();

      res.json(vocab);
    } catch (error) {
      res.status(500).send(error.messge);
    }
  });

  app.get("/api/vocabs", async (req, res) => {
    try {
      const vocabs = await Vocab.find();

      res.json(vocabs);
    } catch (error) {
      res.status(500).send(error.message);
    }
  });

  app.put("/api/vocabs/:_id", async (req, res) => {
    try {
      const { native, foreign } = req.body;
      const vocab = await Vocab.findByIdAndUpdate(
        req.params._id,
        {
          native,
          foreign,
          score: 0,
        },
        {
          new: true,
        }
      );

      if (!vocab) {
        throw new Error("Vocab not found");
      }

      res.json(vocab);
    } catch (error) {
      res.status(500).send(error.message);
    }
  });

  app.put("/api/vocabs/scored/:_id", async (req, res) => {
    try {
      const vocab = await Vocab.findByIdAndUpdate(
        req.params._id,
        {
          $inc: { score: 1 },
        },
        { new: true }
      );

      if (!vocab) {
        throw new Error("Vocab not found");
      }

      res.json(vocab);
    } catch (error) {
      res.status(500).send(error.message);
    }
  });

  app.delete("/api/vocabs/:_id", async (req, res) => {
    try {
      const vocab = await Vocab.findByIdAndDelete(req.params._id);

      if (!vocab) {
        throw new Error("Vocab not found");
      }

      res.json({ _id: vocab._id });
    } catch (error) {
      res.status(500).send(error.message);
    }
  });
};
