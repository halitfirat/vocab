const mongoose = require("mongoose");
const { Schema } = mongoose;

const vocabSchema = new Schema({
  native: String,
  foreign: String,
  score: { type: Number, default: 0 },
});

mongoose.model("vocabs", vocabSchema);
