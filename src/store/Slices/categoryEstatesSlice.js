import {initialState} from "../States/InitialStateCategoryEstates";
import {createSlice} from "@reduxjs/toolkit";

const categoryEstatesSlice = createSlice({
  name: "categoryEstates",
  initialState,
  reducers: {
    setCategoryEstates(state, action) {
      state.allCategories = action.payload
    },
    setMainCategoryEstates(state, action) {
      state.mainCategories = action.payload
    },
    setUnderCategoryEstates(state, action) {
      state.underCategories = action.payload
    },
    setActiveTab(state, action) {
      state.activeTab = action.payload
    }
  }
})

export const {setCategoryEstates, setMainCategoryEstates, setUnderCategoryEstates, setActiveTab} = categoryEstatesSlice.actions;
export default categoryEstatesSlice.reducer;