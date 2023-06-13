import {initialState} from "../States/InitialStateSearchAddress";
import {createSlice} from "@reduxjs/toolkit";

const searchAddressSlice = createSlice({
  name: "searchAddress",
  initialState,
  reducers: {
    setSettlements(state, action) {
      state.settlements = action.payload
    },
    setStreet(state, action) {
      state.street = action.payload
    },
    setShowSettlements(state, action) {
      state.isShowSettlementsForm = action.payload
    },
    setShowStreet(state, action) {
      state.isShowStreetForm = action.payload
    },
    setAddressStatus(state, action) {
      state.addressStatus = action.payload
    }
  }
})

export const {setSettlements, setStreet, setShowSettlements, setShowStreet, setAddressStatus} = searchAddressSlice.actions;
export default searchAddressSlice.reducer;