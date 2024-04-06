import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  pending: false,
  list: [],
};

export const addVocab = createAsyncThunk(
  "vocab/addVocab",
  async ({ vocabData, navigate }) => {
    const response = await axios.post(
      `${process.env.REACT_APP_API_URL}/api/vocabs/`,
      vocabData
    );

    return response.data;
  }
);

export const updateVocab = createAsyncThunk(
  "vocab/updateVocab",
  async (vocabData) => {
    const { _id } = vocabData;

    try {
      const response = await axios.put(
        `${process.env.REACT_APP_API_URL}/api/vocabs/${_id}`,
        vocabData
      );

      return response.data;
    } catch (error) {
      console.log(error.message);
    }
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
        state.pending = true;
      })
      .addCase(addVocab.fulfilled, (state, action) => {
        state.pending = false;

        const { navigate } = action.meta.arg;
        navigate("/vocabs");
      })
      .addCase(getVocabs.pending, (state) => {
        state.pending = true;
      })
      .addCase(getVocabs.fulfilled, (state, action) => {
        state.pending = false;
        state.list = action.payload;
      })
      .addCase(updateVocab.pending, (state) => {
        state.pending = true;
      })
      .addCase(updateVocab.fulfilled, (state, action) => {
        state.pending = false;

        const { payload } = action;
        state.list = state.list.map((vocab) =>
          vocab._id === payload._id ? payload : vocab
        );
      });
  },
});

export const selectPending = (state) => state.vocab.pending;
export const selectVocabList = (state) => state.vocab.list;

export default vocabSlice.reducer;
