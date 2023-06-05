import {initialState} from "../States/InitialStateSearchAddress";
import {createSlice} from "@reduxjs/toolkit";

const searchAddressSlice = createSlice({
  name: "searchAddress",
  initialState,
  reducers: {
    setSettlements(state, action) {
      state.settlements = action.payload
    },
  }
})

export const {setSettlements} = searchAddressSlice.actions;
export default searchAddressSlice.reducer;