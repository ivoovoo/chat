import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const sendMessageFetch = createAsyncThunk("SEND_MESSAGE", async () => {
  return "Design development, UX/UI, and product design are all related terms in the field of design, but they refer to slightly different aspects of the design process. Design development refers...";
});

const chatSlice = createSlice({
  name: "CHAT",
  initialState: {
    messages: {},
    activeName: null,
  },
  reducers: {
    addMessage: (state, action) => {
      const text = action.payload;
      if (!state.activeName) {
        const splitText = text.split(" ");
        let name;
        if (splitText.length > 3) {
          name = splitText.slice(0, 3).join(" ") + "...";
        } else {
          name = splitText.join(" ");
        }

        state.activeName = name;
        state.messages[state.activeName] = [];
      }
      state.messages[state.activeName].push([
        {
          message: action.payload,
        },
      ]);
      return state;
    },
    offWriting: (state, action) => {
      console.log("offWrirtin");
      let lastItem =
        state.messages[state.activeName][
          state.messages[state.activeName].length - 1
        ];
      lastItem[lastItem.length - 1].writing = false;
      return state;
    },
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
    b.addCase(sendMessageFetch.fulfilled, (state, action) => {
      const message = state.messages[state.activeName];
      message[message.length - 1].push({
        answer: true,
        message: action.payload,
        writing: true,
      });

      return state;
    });
  },
});

export default chatSlice.reducer;
export const { addMessage, offWriting, resetChat, changeActiveName } =
  chatSlice.actions;
