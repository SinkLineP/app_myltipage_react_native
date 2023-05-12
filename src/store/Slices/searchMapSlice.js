import {initialState} from "../States/InitialStateMap";
import {createSlice} from "@reduxjs/toolkit";

const searchMapSlice = createSlice({
  name: "searchMap",
  initialState,
  reducers: {
    setCoordinates(state, action) {
      state.currentCoordinate.lat = action.payload.lat;
      state.currentCoordinate.lon = action.payload.lon;
    },
    saveAddress(state, action) {
      state.currentAddress = action.payload.address;
    }
  }
})

export const {setCoordinates, saveAddress} = searchMapSlice.actions;
export default searchMapSlice.reducer;