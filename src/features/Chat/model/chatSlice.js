import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import image_1 from "../assets/image-1.png";
import image_2 from "../assets/image-2.png";
import image_3 from "../assets/image-3.png";
import image_4 from "../assets/image-4.png";
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

export const sendPictureFetch = createAsyncThunk(
  "SEND_MESSAGE_IMAGES",
  async () => {
    return [image_1, image_2, image_3, image_4];
  }
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
    b.addCase(sendPictureFetch.fulfilled, (state, action) => {
      const message = state.messages[state.activeName];
      message[message.length - 1].push({
        answer: true,
        message: action.payload,
        writing: true,
        type: "image",
      });
      return state;
    });
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
