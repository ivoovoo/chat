import { configureStore } from "@reduxjs/toolkit";
import { sidebarSlice } from "../../widget/Sidebar";
import { chatSlice } from "../../widget/Chat";
import { chatFormSlice } from "../../features/ChatForm";

export default configureStore({
  reducer: {
    sidebar: sidebarSlice,
    chat: chatSlice,
    chatForm: chatFormSlice,
  },
});
