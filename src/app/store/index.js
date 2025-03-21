import { configureStore } from "@reduxjs/toolkit";
import { sidebarSlice } from "../../widget/Sidebar";
import { chatSlice } from "../../features/Chat";

export default configureStore({
  reducer: {
    sidebar: sidebarSlice,
    chat: chatSlice,
  },
});


