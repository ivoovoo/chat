import { createSlice } from "@reduxjs/toolkit";
import { setTextFunc } from "./utils/reducers/setTextFunc";
import { setFilesFunc } from "./utils/reducers/setFilesFunc";
import { setTextareaDisabledFunc } from "./utils/reducers/setTextareaDisabledFunc";

const composerSlice = createSlice({
  name: "COMPOSER",
  initialState: {
    text: "",
    files: [],
    textareaDisabled: false,
  },
  reducers: {
    setText: setTextFunc,
    setFiles: setFilesFunc,
    setTextareaDisabled: setTextareaDisabledFunc,
  },
});

export default composerSlice.reducer;
export const { setText, setFiles,setTextareaDisabled } = composerSlice.actions;
