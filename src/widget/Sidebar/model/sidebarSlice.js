import { createSlice } from "@reduxjs/toolkit";
export const THEME_CHATEX = "THEME_CHATEX";
export const THEME_SPEED = "THEME_SPEED";
const sidebarSlice = createSlice({
  name: "SIDEBAR",
  initialState: {
    positionSidebar: false,
    theme: localStorage.getItem(THEME_CHATEX) || "light",
    inputSpeed: Number(localStorage.getItem(THEME_SPEED)) || 20,
  },
  reducers: {
    changePosition: (state, action) => {
      if (action.payload) {
        state.positionSidebar = action.payload;
        return state;
      }

      state.positionSidebar = !state.positionSidebar;

      return state;
    },
    changeTheme: (state, action) => {
      localStorage.setItem(THEME_CHATEX, action.payload);
      state.theme = action.payload;
      return state;
    },
    changeInputSpeed: (state, action) => {
      const bool = action.payload;
      if (bool) {
        state.inputSpeed = 80;
      } else {
        state.inputSpeed = 20;
      }

      localStorage.setItem(THEME_SPEED, state.inputSpeed);

      return state;
    },
  },
});

export const { changeTheme, changePosition, changeInputSpeed } =
  sidebarSlice.actions;
export default sidebarSlice.reducer;
