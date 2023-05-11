import {initialState} from "../States/InitialStateMap";
import {createSlice} from "@reduxjs/toolkit";

const searchMapSlice = createSlice({
  name: "searchMap",
  initialState,
  reducers: {
    setCoordinates(state, action) {
      console.log(action);
      state.currentCoordinate.lat = action.payload.lat;
      state.currentCoordinate.lon = action.payload.lon;
    },
  }
})

export const {setCoordinates} = searchMapSlice.actions;
export default searchMapSlice.reducer;