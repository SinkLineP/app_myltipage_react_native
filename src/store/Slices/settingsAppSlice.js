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
    },
    setCountryApp(state, action) {
      state.country = action.payload
    }
  }
})

export const {setLanguageApp, setThemeApp, setCountryApp} = settingsAppSlice.actions;
export default settingsAppSlice.reducer;