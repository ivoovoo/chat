import { configureStore } from "@reduxjs/toolkit";
import { sidebarSlice } from "../../widget/Sidebar";



export default configureStore({
    reducer: {
        sidebar:sidebarSlice
    }
})