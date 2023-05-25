import {initialState} from "../States/InitialStateMap";
import {createSlice} from "@reduxjs/toolkit";

const searchMapSlice = createSlice({
  name: "searchMap",
  initialState,
  reducers: {
    setCoordinates(state, action) {
      state.currentCoordinate.lat = action.payload.lat;
      state.currentCoordinate.lon = action.payload.lon;
      state.currentCoordinate.lat_d = action.payload.lat_d;
      state.currentCoordinate.lon_d = action.payload.lon_d;
    },
    saveAddress(state, action) {
      state.currentAddress = action.payload.address;
    },
    setActiveTab(state, action) {
      state.activeTab = action.payload;
    }
  }
})

export const {setCoordinates, saveAddress, setActiveTab} = searchMapSlice.actions;
export default searchMapSlice.reducer;