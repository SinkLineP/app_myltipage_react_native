import {initialState} from "../States/InitialStateSettingsApp";
import {createSlice} from "@reduxjs/toolkit";

const settingsAppSlice = createSlice({
  name: "settingsApp",
  initialState,
  reducers: {
    setLanguageApp(state, action) {
      state.language = action.payload.language
    },
    setThemeApp(state, action) {
      state.themeApp = action.payload.themeApp
    }
  }
})

export const {setLanguageApp, setThemeApp} = settingsAppSlice.actions;
export default settingsAppSlice.reducer;