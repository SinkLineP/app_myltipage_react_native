import {initialState} from "../States/InitialStateEstates";
import {createSlice} from "@reduxjs/toolkit";

const estatesSlice = createSlice({
  name: "estates",
  initialState,
  reducers: {
    setAllEstates(state, action) {
      state.allEstates = action.payload;
    }
  }
})

export const {setAllEstates} = estatesSlice.actions;
export default estatesSlice.reducer;