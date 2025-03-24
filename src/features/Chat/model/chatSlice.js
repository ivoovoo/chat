import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addMessageFunc } from "./utils/reducers/addMessageFunc";
import { sendMessageFetch } from "./utils/asyncSendMessage/sendMessageFetch";
import { sendMessageFulfilled } from "./utils/asyncSendMessage/sendMessageFulfilled";
import { startGenerateFunc } from "./utils/reducers/startGenerateFunc";
import { finishGenerateFunc } from "./utils/reducers/finishGenerateFunc";
import { addEditItemFunc } from "./utils/reducers/addEditItemFunc";
import { deleteEditItemFunc } from "./utils/reducers/deleteEditItem";
import { pinMessageFunc } from "./utils/reducers/pinMessageFunc";

export const sendMessageThunk = createAsyncThunk(
  "SEND_MESSAGE",
  sendMessageFetch
);

const chatSlice = createSlice({
  name: "CHAT",
  initialState: {
    messages: {},
    activeName: null,
    generate: false,
    editItem: {},
  },
  reducers: {
    addMessage: addMessageFunc,
    startGenerate: startGenerateFunc,
    finishGenerate: finishGenerateFunc,
    addEditItem: addEditItemFunc,
    deleteEditItem: deleteEditItemFunc,
    pinMessage: pinMessageFunc,
    resetChat: (state) => {
      state.activeName = null;
      return state;
    },
    changeActiveName: (state, action) => {
      state.activeName = action.payload;
      return state;
    },
  },

  extraReducers: (b) => {
    b.addCase(sendMessageThunk.fulfilled, sendMessageFulfilled);
  },
});

export default chatSlice.reducer;
export const {
  addMessage,
  startGenerate,
  finishGenerate,
  deleteEditItem,
  addEditItem,
  resetChat,
  changeActiveName,
  pinMessage,
} = chatSlice.actions;
