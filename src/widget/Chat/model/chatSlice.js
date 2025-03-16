import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const sendMessageFetch = createAsyncThunk("SEND_MESSAGE", async () => {
  return "Design development, UX/UI, and product design are all related terms in the field of design, but they refer to slightly different aspects of the design process. Design development refers...";
});

const chatSlice = createSlice({
  name: "CHAT",
  initialState: [],
  reducers: {
    addMessage: (state, action) => {
      state.push({
        message: action.payload,
      });
    },
    offWriting: (state, action) => {
      let lastItem = state[state.length - 1];
      console.log(lastItem);
      if (lastItem !== action.payload) {
        lastItem = state.find((item) => item.writing);
        console.log("if");
      }

      lastItem.writing = false;

      return state;
    },
  },

  extraReducers: (b) => {
    b.addCase(sendMessageFetch.fulfilled, (state, action) => {
      state.push({
        answer: true,
        message: action.payload,
        writing: true,
      });

      return state;
    });
  },
});

export default chatSlice.reducer;
export const { addMessage, offWriting } = chatSlice.actions;
