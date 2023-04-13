import { configureStore } from "@reduxjs/toolkit";
import vocabReducer from "../features/vocab/vocabSlice";

export const store = configureStore({
  reducer: {
    vocab: vocabReducer,
  },
});
