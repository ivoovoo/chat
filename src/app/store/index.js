import { configureStore } from "@reduxjs/toolkit";
import { sidebarSlice } from "../../widget/Sidebar";
import { chatSlice } from "../../features/Chat";
import themeSlice from "../../shared/model/themeSlice";

export default configureStore({
  reducer: {
    sidebar: sidebarSlice,
    chat: chatSlice,
    theme:themeSlice
  },
});
