import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
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
        state.value += action.payload;
      });
  },
});

export const selectLoading = (state) => state.vocab.loading;

export default vocabSlice.reducer;
