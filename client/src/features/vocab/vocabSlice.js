import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  addVocabPending: false,
  getVocabsPending: false,
  updateVocabPending: false,
  deleteVocabPending: false,
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

export const deleteVocab = createAsyncThunk(
  "vocab/deleteVocab",
  async (vocabId) => {
    try {
      const response = await axios.delete(
        `${process.env.REACT_APP_API_URL}/api/vocabs/${vocabId}`
      );

      return response.data;
    } catch (error) {
      console.log(error.message);
    }
  }
);

export const vocabSlice = createSlice({
  name: "vocab",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(addVocab.pending, (state) => {
        state.addVocabPending = true;
      })
      .addCase(addVocab.fulfilled, (state, action) => {
        state.addVocabPending = false;

        const { navigate } = action.meta.arg;
        navigate("/vocabs");
      })
      .addCase(getVocabs.pending, (state) => {
        state.getVocabsPending = true;
      })
      .addCase(getVocabs.fulfilled, (state, action) => {
        state.getVocabsPending = false;
        state.list = action.payload;
      })
      .addCase(updateVocab.pending, (state, action) => {
        state.updateVocabPending = true;
      })
      .addCase(updateVocab.fulfilled, (state, action) => {
        state.updateVocabPending = false;

        const updatedVocab = action.payload;
        state.list = state.list.map((vocab) =>
          vocab._id === updatedVocab._id ? updatedVocab : vocab
        );
      })
      .addCase(deleteVocab.pending, (state) => {
        state.deleteVocabPending = true;
      })
      .addCase(deleteVocab.fulfilled, (state, action) => {
        state.deleteVocabPending = false;

        const deletedVocabId = action.payload;
        state.list = state.list.filter((vocab) => vocab._id !== deletedVocabId);
      });
  },
});

export const selectAddVocabPending = (state) => state.vocab.addVocabPending;
export const selectGetVocabsPending = (state) => state.vocab.getVocabsPending;
export const selectUpdateVocabPending = (state) =>
  state.vocab.updateVocabPending;
export const selectDeleteVocabPending = (state) =>
  state.vocab.deleteVocabPending;
export const selectVocabList = (state) => state.vocab.list;

export default vocabSlice.reducer;
