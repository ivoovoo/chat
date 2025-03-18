import { createSlice } from "@reduxjs/toolkit";

export const THEME_CHATEX_VALUE = "THEME_CHATEX_VALUE"


const themeSlice = createSlice({
    name:'THEME',
    initialState:localStorage.getItem(THEME_CHATEX_VALUE) || 'light',
    reducers: {
        changeTheme: (state,action) => {
            localStorage.setItem(THEME_CHATEX_VALUE, action.payload)
            return action.payload
        }
    }
})

export const {changeTheme} = themeSlice.actions
export default themeSlice.reducer