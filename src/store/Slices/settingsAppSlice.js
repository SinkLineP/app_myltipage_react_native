import {initialState} from "../States/InitialStateSettingsApp";
import {createSlice} from "@reduxjs/toolkit";

const settingsAppSlice = createSlice({
  name: "settingsApp",
  initialState,
  reducers: {
    setLanguageApp(state, action) {
      state.language = action.payload
    },
    setThemeApp(state, action) {
      state.theme = action.payload
    }
  }
})

export const {setLanguageApp, setThemeApp} = settingsAppSlice.actions;
export default settingsAppSlice.reducer;