import { configureStore } from "@reduxjs/toolkit";
import { sidebarSlice } from "../../widget/Sidebar";
import { chatSlice } from "../../features/Chat";
import { composerSlice } from "../../features/Composer";

export default configureStore({
  reducer: {
    sidebar: sidebarSlice,
    chat: chatSlice,
    composer:composerSlice
  },
});
