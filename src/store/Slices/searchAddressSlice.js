import {initialState} from "../States/InitialStateSearchAddress";
import {createSlice} from "@reduxjs/toolkit";

const searchAddressSlice = createSlice({
  name: "searchAddress",
  initialState,
  reducers: {
    setSettlementsStore(state, action) {
      state.settlements = action.payload
    },
    setStreetStore(state, action) {
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
    },
    setStreetStatus(state, action) {
      state.streetStatus = action.payload
    }
  }
})

export const {
  setSettlementsStore,
  setStreetStore,
  setShowSettlements,
  setShowStreet,
  setAddressStatus,
  setStreetStatus
} = searchAddressSlice.actions;
export default searchAddressSlice.reducer;