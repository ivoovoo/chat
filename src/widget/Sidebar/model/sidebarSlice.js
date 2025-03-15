import { createSlice } from "@reduxjs/toolkit";

const sidebarSlice = createSlice({
  name: "SIDEBAR",
  initialState: false,
  reducers: {
    changeState: (state) => {
      return !state;
    },
  },
});

export const { changeState } = sidebarSlice.actions;
export default sidebarSlice.reducer;
