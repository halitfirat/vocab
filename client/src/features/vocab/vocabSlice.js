import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  list: [],
};

export const addVocab = createAsyncThunk(
  "vocab/addVocab",
  async (vocabData) => {
    const response = await axios.post(
      `${process.env.REACT_APP_API_URL}/api/vocabs/`,
      vocabData
    );

    return response.data;
  }
);

export const getVocabs = createAsyncThunk("vocab/getVocabs", async () => {
  const response = await axios.get(
    `${process.env.REACT_APP_API_URL}/api/vocabs/`
  );

  return response.data;
});

export const vocabSlice = createSlice({
  name: "vocab",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(addVocab.pending, (state) => {
        state.loading = true;
      })
      .addCase(addVocab.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(getVocabs.pending, (state) => {
        state.loading = true;
      })
      .addCase(getVocabs.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      });
  },
});

export const selectLoading = (state) => state.vocab.loading;
export const selectVocabList = (state) => state.vocab.list;

export default vocabSlice.reducer;
