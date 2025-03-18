import { createSlice } from "@reduxjs/toolkit";

const chatFormSlice = createSlice({
  name: "CHAT_FORM",
  initialState: false,
  reducers: {
    generateMessage: () => {
        return true
    },
    finishGenerate:() => {
        return false
    }
  },
});

export default chatFormSlice.reducer;
export const {generateMessage, finishGenerate} = chatFormSlice.actions;
